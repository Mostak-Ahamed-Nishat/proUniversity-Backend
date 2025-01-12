import config from "../../config";
import { TStudent } from "../students/student.interface";
import { Student } from "../students/student.model";
import { TNewUser, TUser } from "./user.interface";
import User from "./user.model";

//#=>Create a student
const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  //Create a user object
  const userData: Partial<TUser> = {};

  userData.role = "student";
  //If Password doesn't provide use default password
  userData.password = password || (config.defaultPassword as string);
  userData.id = "202501201001";
  const result = await User.create(userData);

  if (Object.keys(result).length) {
    //set own generated id
    studentData.id = result.id;
    studentData.user = result._id;
  }
  return result;
};

export const UserServices = {
  createStudentIntoDB,
};
