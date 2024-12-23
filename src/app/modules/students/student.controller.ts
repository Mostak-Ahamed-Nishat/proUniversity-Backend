import { Request, Response } from "express";
import { StudentServices } from "./student.service";

// Create Student Controller
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    //Will call service function to send this data
    const response = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: "Student is created successfully",
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Student created failed",
      error: error,
    });
  }
};

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
const getStudentById = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const response = await StudentServices.getStudentByIdFromDB(studentId);
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

export const StudentController = {
  createStudent,
  getAllStudents,
  getStudentById,
};
