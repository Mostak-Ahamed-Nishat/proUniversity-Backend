import {
  Express,
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from "express";
import { UserServices } from "./user.service";
import { studentValidationSchema } from "../students/student.validation";
import config from "../../config";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";
import catchAsyncHandler from "../../utils/asyncHandler";

const createStudent: RequestHandler = catchAsyncHandler(
  async (req, res, next) => {
    const { password, student: studentData } = req.body;

    //Will call service function to send this data
    const response = await UserServices.createStudentIntoDB(
      password,
      studentData
    );
    response &&
      sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Student is created successfully",
        data: response,
      });
  }
);

export const UserControllers = {
  createStudent,
};
