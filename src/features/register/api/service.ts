import { Endpoints, IUser } from "@/entities/user";
import {
  IRegistrationFormResponse,
  IUploadImageResponse,
} from "@/features/register/domain/register.types";

const uploadAvatar = async (
  avatar: Maybe<File>,
): Promise<IUploadImageResponse | undefined> => {
  try {
    if (avatar) {
      const formData = new FormData();

      formData.append("image", avatar);

      const response = await fetch(Endpoints.uploadImage, {
        method: "POST",
        body: formData,
      });

      return await response.json();
    }
  } catch (error: unknown) {
    // Это бессмысленно, просто успокаиваю ts
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

const register = async (
  avatar: Maybe<File>,
  formData: IUser,
): Promise<IRegistrationFormResponse | undefined> => {
  try {
    const uploadAvatarResponse = await uploadAvatar(avatar);

    if (uploadAvatarResponse?.imageUrl) {
      const response = await fetch(Endpoints.register, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          avatar: uploadAvatarResponse.imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибочка");
      }

      return await response.json();
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const Service = {
  register,
};
