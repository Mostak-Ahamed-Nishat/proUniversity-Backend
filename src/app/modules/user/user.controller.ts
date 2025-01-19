import { Express, NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import { studentValidationSchema } from "../students/student.validation";
import config from "../../config";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, student: studentData } = req.body;

    //Will call service function to send this data
    const response = await UserServices.createStudentIntoDB(
      password,
      studentData
    );

    response &&
      res.status(200).json({
        success: true,
        message: "Student is created successfully",
        data: response,
      });
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createStudent,
};

// if (error instanceof z.ZodError) {
//   // Send structured validation error to the frontend
//   return res.status(400).json({
//     success: false,
//     message: "Validation failed",
//     errors: error.errors.map((issue: { path: any; message: any }) => ({
//       path: issue.path, // Field that caused the error
//       message: issue.message, // Human-readable error message
//     })),
//   });
// }
// //Server error
// res.status(400).json({
//   success: false,
//   message: error.message || "Student created failed",
//   error: error,
// });
