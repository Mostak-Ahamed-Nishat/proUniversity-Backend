import mongoose from "mongoose";
import {
  TAcademicSemesterCodes,
  TAcademicSemesterMonths,
  TAcademicSemesterNames,
  TAcademicSemester,
} from "./academicSemester.interface";
import { AcademicSemesterCode, AcademicSemesterMonth, AcademicSemesterName } from "./academicSemester.constant";



const academySemesterModelSchema = new mongoose.Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    startMonth: {
      type: String,
      enum: AcademicSemesterMonth,
      required: true,
    },
    endMonth: {
      type: String,
      enum: AcademicSemesterMonth,
    },
  },
  { timestamps: true }
);
const AcademicSemester = mongoose.model<TAcademicSemester>(
  "AcademySemester",
  academySemesterModelSchema
);
export default AcademicSemester;
