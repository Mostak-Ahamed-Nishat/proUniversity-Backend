import { z } from "zod";
import {
  AcademicSemesterCode,
  AcademicSemesterMonth,
  AcademicSemesterName,
} from "./academicSemester.constant";

// Constants for validation

// Zod schema for creating academic semester
export const createAcademicSemesterValidation = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [string], {
      required_error: "Semester name is required",
    }),
    year: z.date({
      required_error: "Year is required",
    }),
    code: z.enum([...AcademicSemesterCode] as [string], {
      required_error: "Code is required",
    }),
    startMonth: z.enum([...AcademicSemesterMonth] as [string], {
      required_error: "Start month is required",
    }),
    endMonth: z.enum([...AcademicSemesterMonth] as [string], {
      required_error: "End month is required",
    }),
  }),
});

// Zod schema for updating academic semester
export const updateAcademicSemesterValidation = z.object({
  body: z.object({
    title: z.enum([...AcademicSemesterName] as [string]).optional(),
    year: z.date().optional(),
    code: z.enum([...AcademicSemesterCode] as [string]).optional(),
    startMonth: z.enum([...AcademicSemesterMonth] as [string]).optional(),
    endMonth: z.enum([...AcademicSemesterMonth] as [string]).optional(),
  }),
});
