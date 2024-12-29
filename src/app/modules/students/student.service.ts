import { TStudent } from "./student.interface";
import { Student } from "./student.model";

//#=>Create a student
const createStudentIntoDB = async (studentData: TStudent) => {
  //Builtin static method

  if (await Student.isUserExists(studentData.id)) {
    throw new Error("User already exists");
  }
  const result = await Student.create(studentData);

  // const student = await new Student(studentData);
  // if (await student.isUserExists(student.id)) {
  //   throw new Error("User already exists");
  // }
  // const result = await student.save();
  return result;
};

//#=> Get All students
const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

//#=>Get single student by id
const getSingleStudentByIdFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};

//#=>delete single student by id
const deleteStudentByIdFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

//#=> Export
export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentByIdFromDB,
  deleteStudentByIdFromDB,
};
