import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(3, "Имя должно состоять хотя-бы из 3 символов"),
  email: z.string().email("Не корректный email"),
  lastName: z.string().min(3, "Фамилия должна состоять хотя бы из 3 символов"),
  username: z
    .string()
    .min(3, "Псевдоним должен состоять хотя бы из 3 символов"),
  password: z
    .string()
    .min(6, "Пароль должен состоять хотя-бы из 6 символов")
    .regex(/[a-zA-Z]/, "Пароль должен содержать хотя-бы одну латинскую букву")
    .regex(/\d/, "Пароль должен содержать хотя-бы одну цифру"),
});

export interface IUser {
  name: string;
  email: string;
  lastName: string;
  username: string;
  password: string;
}
