import { z } from "zod";

const UserValidationSchema = z.object({
  password: z
    .string()
    .min(5, { message: "Password min 5 character" })
    .optional(),
});

export default UserValidationSchema;
