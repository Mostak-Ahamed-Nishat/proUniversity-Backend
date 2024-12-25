import { TStudent } from "./student.interface";
import { Student } from "./student.model";

//#=>Create a student
const createStudentIntoDB = async (studentData: TStudent) => {
  //Builtin static method
  // const result = await StudentModel.create(student);
  const student = await new Student(studentData);
  if (await student.isUserExists(student.id)) {
    throw new Error("User already exists");
  }
  const result = await student.save();
  return result;
};

//#=> Get All students
const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

//#=>Get single student by id
const getStudentByIdFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

//#=> Export
export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getStudentByIdFromDB,
};
