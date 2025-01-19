import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong !";
  return res.status(status).json({
    success: false,
    status,
    message,
    error: err,
  });
};

export default globalErrorHandler;
