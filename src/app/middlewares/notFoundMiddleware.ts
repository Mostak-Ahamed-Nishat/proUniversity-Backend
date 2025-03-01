import { NextFunction, Request, Response } from "express";
import status from "http-status";

const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(status.NOT_FOUND).json({
    success: false,
    message: "API not found !",
    error: "",
  });
};
export default notFoundMiddleware;
