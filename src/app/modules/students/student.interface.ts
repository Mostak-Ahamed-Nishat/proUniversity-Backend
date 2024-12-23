import { Schema, model, connect } from "mongoose";

export type Student = {
  id: string;
  name: UserName;
  gender: "male" | "female";
  email: string;
  avatar?: string;
  dateOfBirth: string;
  contactNumber: string;
  emergencyContactNo: string;
  bloodGroup: "A+" | "A" | "B+" | "B" | "O+" | "O" | "AB+" | "AB";
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: "active" | "inactive";
};

//Guardian information type
export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

// Username type
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

//Local guardian
export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
