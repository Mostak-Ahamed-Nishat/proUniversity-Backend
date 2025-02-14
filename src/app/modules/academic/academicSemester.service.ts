import { TAcademicSemester } from "./academicSemester.interface";
import AcademicSemester from "./academySemester.molde";

export const createAcademicSemesterIntoDB = async (
  payload: TAcademicSemester
) => {
  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
