import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/students/student.routes";
import { UserRoutes } from "./app/modules/user/user.route";
const app: Application = express();

app.use(express.json());
app.use(cors());

//Application routs
app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  var a = 10;
  console.log("Hello World !!");
  res.json({
    success: true,
    message: "Welcome to home page",
  });
});

export default app;
