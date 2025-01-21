import { Router } from "express";
import { StudentRoutes } from "../modules/students/student.routes";
import { UserRoutes } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/students", // Removed the trailing slash
    route: StudentRoutes,
  },
  {
    path: "/users", // Removed the trailing slash
    route: UserRoutes,
  },
];

// All Routes
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
