import { Schema, model, connect } from "mongoose";

export type Student = {
  id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
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
};

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
