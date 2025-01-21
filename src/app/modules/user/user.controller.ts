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

const createStudent: RequestHandler = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createStudent,
};
