import mongoose, { Schema, model } from "mongoose";
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  StudentMethods,
  TUserName,
  StudentModel,
} from "./student.interface";

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, "First name is required."],
    maxlength: [20, "First name can't more than 20 characters"],
  },
  middleName: {
    trim: true,
    type: String,
  },
  lastName: {
    trim: true,
    type: String,
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, "Father's name is required."],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, "Father's occupation is required."],
  },
  fatherContactNo: {
    type: String,
    trim: true,
    required: [true, "Father's contact number is required."],
  },
  motherName: {
    type: String,
    trim: true,

    required: [true, "Mother's name is required."],
  },
  motherOccupation: {
    type: String,
    trim: true,
    required: [true, "Mother's occupation is required."],
  },
  motherContactNo: {
    type: String,
    trim: true,
    required: [true, "Mother's contact number is required."],
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    trim: true,
    required: [true, "Local guardian's name is required."],
  },
  occupation: {
    type: String,
    trim: true,
    required: [true, "Local guardian's occupation is required."],
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, "Local guardian's contact number is required."],
  },
  address: {
    type: String,
    trim: true,
    required: [true, "Local guardian's address is required."],
  },
});

// Create Student Schema
const studentSchema = new Schema<TStudent, StudentModel, StudentMethods>({
  id: {
    type: String,
    required: [true, "Student ID is required."],
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: [true, "Student information can't be empty."],
  },
  gender: {
    type: String,
    enum: {
      values: ["female", "male"],
      message: "Gender must be 'male' or 'female'.",
    },
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email is required."],
  },
  dateOfBirth: {
    type: String,
    required: [true, "Date of birth is required."],
  },
  contactNumber: {
    type: String,
    required: [true, "Contact number is required."],
  },
  emergencyContactNo: {
    type: String,
    required: [true, "Emergency contact number is required."],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "A", "B+", "B", "O+", "O", "AB+", "AB"],
      message: "{VALUE} is not a valid blood group.",
    },
  },
  avatar: {
    type: String,
  },
  guardian: {
    type: guardianSchema,
    required: [true, "Guardian information is required."],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, "Local guardian information is required."],
  },
  isActive: {
    type: String,
    enum: ["active", "inactive"],
    message: "Status must be 'active' or 'inactive'.",
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent address is required."],
  },
  presentAddress: {
    type: String,
    required: [true, "Present address is required."],
  },
  profileImage: {
    type: String,
  },
});

studentSchema.methods.isUserExists = async (id: string) => {
  const isUserExist = await Student.findOne({ id });
  return isUserExist;
};

// Create Student Model
export const Student = model<TStudent, StudentModel>("Student", studentSchema);
