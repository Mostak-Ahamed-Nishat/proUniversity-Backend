import dotenv from "dotenv";
import path from "path";

//Current working directory/.env
dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  port: process.env.port,
  database_url: process.env.MONGODB_URL,
  saltRound: process.env.SALTROUND,
  defaultPassword: process.env.DEFAULT_PASSWORD,
};
