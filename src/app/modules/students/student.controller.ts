import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import { studentValidationSchema } from "./student.validation";
import { z } from "zod";
// Create Student Controller

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const response = await StudentServices.getAllStudentsFromDB();
    return res.status(200).json({
      success: true,
      message: "Successfully get all the students",
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to get students",
      error: error,
    });
  }
};

const getSingleStudentById = async (req: Request, res: Response) => {
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
    res.status(400).json({
      success: false,
      message: "Failed to get student",
      error: error,
    });
  }
};

const deleteStudentId = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const response = await StudentServices.deleteStudentByIdFromDB(studentId);
    return res.status(200).json({
      success: true,
      message: "Student delete successfully",
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to delete student",
      error: error,
    });
  }
};

export const StudentController = {
  getAllStudents,
  getSingleStudentById,
  deleteStudentId,
};
