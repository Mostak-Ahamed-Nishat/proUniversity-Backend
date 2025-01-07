import { z } from "zod";

const UserValidationSchema = z.object({
  id: z.string(),
  password: z.string().min(5, { message: "Password min 5 character" }),
  needPasswordChange: z.boolean().optional(),
  role: z.enum(["admin", "student", "faculty"]),
  status: z.enum(["in-progress", "blocked"]).default("in-progress"),
  isDeleted: z.boolean().optional().default(false),
});

export default UserValidationSchema;
