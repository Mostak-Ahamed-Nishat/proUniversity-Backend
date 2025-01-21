import express, {
  Application,
  NextFunction,
  request,
  Request,
  Response,
} from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/students/student.routes";
import { UserRoutes } from "./app/modules/user/user.route";
import globalErrorHandler from "./app/middlewares/globalErrorHandleMiddleware";
import notFoundMiddleware from "./app/middlewares/notFoundMiddleware";
import router from "./app/routes";
const app: Application = express();

app.use(express.json());
app.use(cors());

//Application routs
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  var a = 10;
  console.log("Hello World !!");
  res.json({
    success: true,
    message: "Welcome to home page",
  });
});

//error handler middleware
app.use(notFoundMiddleware);
app.use(globalErrorHandler);

export default app;
