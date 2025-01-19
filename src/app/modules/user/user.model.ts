import bcrypt from "bcrypt";
import { TUser } from "./user.interface";
import { model, Model, Schema, SchemaType } from "mongoose";
import config from "../../config";

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ["admin", "student", "faculty"],
      required: true,
    },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
      default: "in-progress",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const User = model<TUser>("User", userSchema);
export default User;

//Hash password
userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.saltRound));
  next();
});

// Return password as empty
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});
