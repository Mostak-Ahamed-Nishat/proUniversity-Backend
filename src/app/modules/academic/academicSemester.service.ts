import AcademicSemester from "./academySemester.molde";

export const createAcademicSemesterIntoDB = async (
  req: Request,
  res: Response
) => {
  const createData = req.body;
  const result = await AcademicSemester.create(createData);
};
