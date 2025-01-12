import { TStudent } from "./student.interface";
import { Student } from "./student.model";



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
  getAllStudentsFromDB,
  getSingleStudentByIdFromDB,
  deleteStudentByIdFromDB,
};
