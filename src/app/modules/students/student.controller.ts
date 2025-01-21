import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentServices } from "./student.service";
import { studentValidationSchema } from "./student.validation";
import { z } from "zod";
// Create Student Controller

const getAllStudents: RequestHandler = async (req, res, next) => {
  try {
    const response = await StudentServices.getAllStudentsFromDB();
    return res.status(200).json({
      success: true,
      message: "Successfully get all the students",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudentById: RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const response = await StudentServices.getSingleStudentByIdFromDB(
      studentId
    );
    return res.status(200).json({
      success: true,
      message: "Student found successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudentId: RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const response = await StudentServices.deleteStudentByIdFromDB(studentId);
    return res.status(200).json({
      success: true,
      message: "Student delete successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentController = {
  getAllStudents,
  getSingleStudentById,
  deleteStudentId,
};
