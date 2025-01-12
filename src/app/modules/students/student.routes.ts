import express from "express";
import { StudentController } from "./student.controller";
const router = express.Router();

router.get("/", StudentController.getAllStudents);
router.get("/:studentId", StudentController.getSingleStudentById);
router.delete("/:studentId", StudentController.deleteStudentId);

export const StudentRoutes = router;
