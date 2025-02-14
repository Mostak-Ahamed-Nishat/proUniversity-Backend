import express from "express";
import validateRequestMiddleware from "../../middlewares/validateRequestMiddleware";
import { createAcademicSemesterValidation } from "./academicSemester.validation";
import { AcademicSemesterControllers } from "./academicSemester.controller";
const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequestMiddleware(createAcademicSemesterValidation),
  AcademicSemesterControllers.createAcademicSemester
);

export const AcademicSemesterRoutes = router;
