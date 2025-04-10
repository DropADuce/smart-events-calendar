import { IUser } from "@/entities/user";

export interface ILoginForm {
  email: string;
  password: string;
}

export type TUser = Partial<IUser> & {
  id: number;
  email: string;
};

export interface IAuthState {
  isAuth: boolean;
  user: TUser | null;
  setAuth: Func<[TUser]>;
  logout: Func;
}
