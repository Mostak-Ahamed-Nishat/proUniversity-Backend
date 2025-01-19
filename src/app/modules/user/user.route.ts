import express from "express";
import { UserControllers } from "./user.controller";
const router = express.Router();

//Create User
router.post("/create-student", UserControllers.createStudent);
// router.get();
// router.delete();
// router.get();

export const UserRoutes = router;
