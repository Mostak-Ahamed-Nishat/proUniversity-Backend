import config from "../../config";
import { TStudent } from "../students/student.interface";
import { Student } from "../students/student.model";
import { TUser } from "./user.interface";
import User from "./user.model";

//#=>Create a student
const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  //Create a user object
  const userData: Partial<TUser> = {};

  userData.role = "student";
  //If Password doesn't provide use default password
  userData.password = password || (config.defaultPassword as string);
  userData.id = "202501201001";

  //Create a use
  const createNewUser = await User.create(userData);

  //If the user has created successfully prepare a student data object
  if (Object.keys(createNewUser).length) {
    //set own generated id
    studentData.id = createNewUser.id;
    studentData.user = createNewUser._id;
    //Create a student
    const createNewStudent = await Student.create(studentData);
    return createNewStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
