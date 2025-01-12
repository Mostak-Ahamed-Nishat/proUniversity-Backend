import { Express, Request, Response } from "express";
import { UserServices } from "./user.service";
import { studentValidationSchema } from "../students/student.validation";
import config from "../../config";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;

    // //Validation check
    // const parsedStudentData = studentValidationSchema.parse(
    //   password,
    //   studentData
    // );

    

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
  } catch (error: any) {
    //If any validation error occurs

    if (error instanceof z.ZodError) {
      // Send structured validation error to the frontend
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.errors.map((issue) => ({
          path: issue.path, // Field that caused the error
          message: issue.message, // Human-readable error message
        })),
      });
    }
    //Server error
    res.status(400).json({
      success: false,
      message: error.message || "Student created failed",
      error: error,
    });
  }
};
