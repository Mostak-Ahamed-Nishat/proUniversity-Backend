import mongoose from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";
import {
  AcademicSemesterCode,
  AcademicSemesterMonth,
  AcademicSemesterName,
} from "./academicSemester.constant";

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
    year: {
      type: String,
      required: true,
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

//Check the same year and semester before save
academySemesterModelSchema.pre("save", async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    name: this.name,
    year: this.year,
  });

  if (isSemesterExists) {
    throw new Error("Semester is already exists !");
  }
  next();
});

const AcademicSemester = mongoose.model<TAcademicSemester>(
  "AcademySemester",
  academySemesterModelSchema
);

export default AcademicSemester;
