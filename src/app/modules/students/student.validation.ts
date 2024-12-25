import { z } from "zod";

// UserName Schema
const userNameSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "First name is required." })
    .max(20, { message: "First name can't be more than 20 characters." }),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim().optional(),
});

// Guardian Schema
const guardianSchema = z.object({
  fatherName: z
    .string()
    .trim()
    .min(1, { message: "Father's name is required." }),
  fatherOccupation: z
    .string()
    .trim()
    .min(1, { message: "Father's occupation is required." }),
  fatherContactNo: z
    .string()
    .trim()
    .regex(/^\d{10}$/, {
      message: "Father's contact number must be a valid 10-digit number.",
    }),
  motherName: z
    .string()
    .trim()
    .min(1, { message: "Mother's name is required." }),
  motherOccupation: z
    .string()
    .trim()
    .min(1, { message: "Mother's occupation is required." }),
  motherContactNo: z
    .string()
    .trim()
    .regex(/^\d{10}$/, {
      message: "Mother's contact number must be a valid 10-digit number.",
    }),
});

// Local Guardian Schema
const localGuardianSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Local guardian's name is required." }),
  occupation: z
    .string()
    .trim()
    .min(1, { message: "Local guardian's occupation is required." }),
  contactNo: z
    .string()
    .trim()
    .regex(/^\d{10}$/, {
      message:
        "Local guardian's contact number must be a valid 10-digit number.",
    }),
  address: z
    .string()
    .trim()
    .min(1, { message: "Local guardian's address is required." }),
});

// Student Schema
const studentValidationSchema = z.object({
  id: z.string().trim().min(1, { message: "Student ID is required." }),
  name: userNameSchema,
  gender: z.enum(["female", "male"], {
    errorMap: () => ({ message: "Gender must be 'male' or 'female'." }),
  }),
  email: z.string().trim().email({ message: "Invalid email address." }),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Date of birth must be in the format YYYY-MM-DD.",
  }),
  contactNumber: z
    .string()
    .trim()
    .regex(/^\d{10}$/, {
      message: "Contact number must be a valid 10-digit number.",
    }),
  emergencyContactNo: z
    .string()
    .trim()
    .regex(/^\d{10}$/, {
      message: "Emergency contact number must be a valid 10-digit number.",
    }),
  bloodGroup: z.enum(["A+", "A", "B+", "B", "O+", "O", "AB+", "AB"], {
    errorMap: (value) => ({ message: `${value} is not a valid blood group.` }),
  }),
  avatar: z.string().url().optional(),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  isActive: z.enum(["active", "inactive"], {
    errorMap: () => ({ message: "Status must be 'active' or 'inactive'." }),
  }),
  permanentAddress: z
    .string()
    .trim()
    .min(1, { message: "Permanent address is required." }),
  presentAddress: z
    .string()
    .trim()
    .min(1, { message: "Present address is required." }),
  profileImage: z.string().url().optional(),
});

// Export the schema for validation
export { studentValidationSchema };
