import { RegisterSchema } from "@/entities/user";

export const loginSchema = RegisterSchema.pick({
  email: true,
  password: true,
});
