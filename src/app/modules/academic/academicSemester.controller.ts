import {
  Express,
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from "express";

import config from "../../config";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";
import catchAsyncHandler from "../../utils/asyncHandler";
import { AcademicSemesterServices } from "./academicSemester.service";

const createAcademicSemester: RequestHandler = catchAsyncHandler(
  async (req, res, next) => {
    const academicSemesterData = req.body;

    //Will call service function to send this data
    const response =
      await AcademicSemesterServices.createAcademicSemesterIntoDB(
        academicSemesterData
      );

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Academic semester is created successfully",
      data: response,
    });
  }
);

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
