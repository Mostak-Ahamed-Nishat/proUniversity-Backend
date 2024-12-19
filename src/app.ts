import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  var a = 10;
  console.log("Hello World !!")
  res.send(a);
});

export default app;
