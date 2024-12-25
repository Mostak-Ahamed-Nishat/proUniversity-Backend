import { Model } from "mongoose";

// Student Interface
export type TStudent = {
  id: string;
  name: TUserName;
  gender: "male" | "female";
  email: string;
  avatar?: string;
  dateOfBirth: string;
  contactNumber: string;
  emergencyContactNo: string;
  bloodGroup: "A+" | "A" | "B+" | "B" | "O+" | "O" | "AB+" | "AB";
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage?: string;
  isActive: "active" | "inactive";
};

// Username type
export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName?: string;
};

//Guardian information type
export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

//Local guardian
export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

//Check by the ID is the user already exist or not
export type StudentMethods = {
  isUserExists: (id: string) => Promise<TStudent | null>;
};

export type StudentModel = Model<
  TStudent,
  Record<string, never>,
  StudentMethods
>;
