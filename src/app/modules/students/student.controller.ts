import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentServices } from "./student.service";
import { studentValidationSchema } from "./student.validation";
import { z } from "zod";
import catchAsyncHandler from "../../utils/asyncHandler";

// Create Student Controller

const getAllStudents = catchAsyncHandler(async (req, res) => {
  const response = await StudentServices.getAllStudentsFromDB();
  return res.status(200).json({
    success: true,
    message: "Successfully get all the students",
    data: response,
  });
});

const getSingleStudentById: RequestHandler = catchAsyncHandler(
  async (req, res) => {
    const { studentId } = req.params;
    const response = await StudentServices.getSingleStudentByIdFromDB(
      studentId
    );
    res.status(200).json({
      success: true,
      message: "Student found successfully",
      data: response,
    });
  }
);

const deleteStudentId: RequestHandler = catchAsyncHandler(async (req, res) => {
  const { studentId } = req.params;
  const response = await StudentServices.deleteStudentByIdFromDB(studentId);
  res.status(200).json({
    success: true,
    message: "Student delete successfully",
    data: response,
  });
});

export const StudentController = {
  getAllStudents,
  getSingleStudentById,
  deleteStudentId,
};
