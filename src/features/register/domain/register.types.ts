import { IUser } from "@/entities/user";

export interface IUploadImageResponse {
  imageUrl: string;
}

export interface IRegistrationFormResponse extends IUser {
  avatar: string | null;
}

export interface IRegiserService {
  register: Func<
    [avatar: Maybe<File>, formData: IUser],
    Promise<IRegistrationFormResponse | undefined>
  >;
}
