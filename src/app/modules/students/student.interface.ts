import { Model } from "mongoose";

// Student Interface
export type TStudent = {
  id: string;
  password: string;
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
  isDeleted: true | false;
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

// --------------Create Static Method for mongoose----------

export interface StudentModel extends Model<TStudent> {
  isUserExists: (id: string) => Promise<TStudent | null>;
}

//-------- Create Instance Method for Mongoose-------
// export type StudentMethods = {
//   isUserExists: (id: string) => Promise<TStudent | null>;
// };

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;
