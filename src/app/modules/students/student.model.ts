import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  StudentModel,
  // StudentMethods,
  TUserName,
} from "./student.interface";
import config from "../../config";
import { boolean } from "zod";

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
const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: {
      type: String,
      required: [true, "Student ID is required."],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User ID is required"],
      unique: true,
      ref: "User",
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      min: 6,
    },
    name: {
      type: userNameSchema,
      required: [true, "Student information can't be empty."],
    },
    gender: {
      type: String,
      required: true,
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
      type: Date,
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
    isDeleted: {
      type: Boolean,
      default: false, // Default value is false if not set
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//Virtual like i store name= first name, mid name,last name but want to return full name so can do it virtually form the existing db

studentSchema.virtual("fullName").get(function () {
  return `${this.name.firstName} ${this.name?.middleName} ${this.name.lastName}`;
});

//-----Custom Static method for check exist user in mongoose---
studentSchema.statics.isUserExists = async function (id: string) {
  const isUserExist = await Student.findOne({ id });
  return isUserExist;
};

// Middleware(pre) just before save the data make the password hash
studentSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.saltRound));
  next();
});

// Middleware(post) just after save the data when returning successfully created data return return without hash password
studentSchema.post("save", async function (doc, next) {
  doc.password = "";
  next();
});

//Middleware aggregation Query Middleware
// -> prevent returning isDelete data for find query
studentSchema.pre("find", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// -> prevent returning isDelete data for findOne query
studentSchema.pre("findOne", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// -> prevent returning isDelete data for aggregations query
studentSchema.pre("aggregate", async function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// ------Custom Instance Method for check exist user in mongoose----
// studentSchema.methods.isUserExists = async (id: string) => {
//   const isUserExist = await Student.findOne({ id });
//   return isUserExist;
// };

// Create Student Model
export const Student = model<TStudent, StudentModel>("Student", studentSchema);
