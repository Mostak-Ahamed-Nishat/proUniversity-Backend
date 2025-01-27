import express, { NextFunction, Request, Response } from "express";
import { UserControllers } from "./user.controller";
import { AnyZodObject } from "zod";
import { studentValidations } from "../students/student.validation";
import validateRequestMiddleware from "../../middlewares/validateRequestMiddleware";
const router = express.Router();

//Create User
router.post(
  "/create-student",
  validateRequestMiddleware(studentValidations.studentValidationSchema),
  UserControllers.createStudent
);
// router.get();
// router.delete();
// router.get();

export const UserRoutes = router;
