import { useCallback, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUser, RegisterSchema } from "@/entities/user";
import { RegisterService } from "@/features/register";
import { useForm as useRHF } from "react-hook-form";
import { IUseRegisterState } from "@/features/register/model/use-register-state";

export const useForm = ({ setIsFormOpen }: IUseRegisterState) => {
  const [avatar, setAvatar] = useState<Maybe<File>>(null);
  const [avatarPreview, setAvatarPreview] = useState<Maybe<string>>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { register: registerUser } = RegisterService.use();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useRHF({
    resolver: zodResolver(RegisterSchema),
    mode: "onBlur",
  });

  const isDisabled = isLoading || !isValid;

  const onSubmit = useCallback(
    async (data: IUser) => {
      try {
        setIsLoading(true);

        await registerUser(avatar, data);
      } finally {
        setIsLoading(false);
        setIsFormOpen(false);
      }
    },
    [avatar, registerUser, setIsFormOpen],
  );

  return {
    setAvatar,
    avatarPreview,
    setAvatarPreview,
    register,
    handleSubmit,
    setError,
    clearErrors,
    errors,
    isDisabled,
    onSubmit,
  };
};
