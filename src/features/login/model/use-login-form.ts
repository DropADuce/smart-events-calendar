"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { ILoginForm } from "@/features/login/domain/login.types";
import { useLogin } from "@/features/login/api/use-login";

export const useLoginForm = () => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") ?? "/";
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const login = useLogin();

  const onSubmit = (data: ILoginForm) => {
    login.mutate(data, {
      onSuccess: () => {
        setTimeout(() => {
          router.push(redirect);
        }, 200);
      },
    });
  };

  return {
    login,
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};
