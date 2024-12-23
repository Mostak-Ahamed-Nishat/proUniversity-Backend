import mongoose, { Schema, model } from "mongoose";  
import {  
  Guardian,  
  LocalGuardian,  
  Student,  
  UserName,  
} from "./student.interface";  

const userNameSchema = new Schema<UserName>({  
  firstName: { type: String, required: true },  
  middleName: { type: String },  
  lastName: { type: String },  
});  

const guardianSchema = new Schema<Guardian>({  
  fatherName: { type: String, required: true },  
  fatherOccupation: { type: String, required: true },  
  fatherContactNo: { type: String, required: true },  
  motherName: { type: String, required: true },  
  motherOccupation: { type: String, required: true },  
  motherContactNo: { type: String, required: true },  
});  

const localGuardianSchema = new Schema<LocalGuardian>({  
  name: { type: String, required: true },  
  occupation: { type: String, required: true },  
  contactNo: { type: String, required: true },  
  address: { type: String, required: true },  
});  

// Create Student Schema  
const studentSchema = new Schema<Student>({  
  id: { type: String },  
  name: userNameSchema,  
  gender: { type: String, enum: ["female", "male"] },  // Fixed enum usage  
  email: { type: String, required: true },  
  dateOfBirth: { type: String, required: true },  
  contactNumber: { type: String, required: true },  
  emergencyContactNo: { type: String, required: true },  
  bloodGroup: { type: String, enum: ["A+", "A", "B+", "B", "O+", "O", "AB+", "AB"] }, // Fixed enum usage  
  avatar: { type: String },  
  guardian: guardianSchema,  
  localGuardian: localGuardianSchema, // Changed from LocalGuardian to localGuardianSchema  
  isActive: { type: String, enum: ["active", "inactive"] }, // Fixed enum usage  
  permanentAddress: { type: String, required: true },  
  presentAddress: { type: String, required: true },  
  profileImage: { type: String },  
});  

// Create Student Model  
export const StudentModel = model<Student>("Student", studentSchema);