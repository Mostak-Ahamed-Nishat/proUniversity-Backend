import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validateRequestMiddleware = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      //if validation success
      await schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validateRequestMiddleware;
