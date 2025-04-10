import { useMutation } from "@tanstack/react-query";
import { ILoginForm, TUser } from "@/features/login/domain/login.types";
import { useAuthStore } from "@/features/login/model/use-auth-store";
import { Endpoints } from "@/entities/user";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (payload: ILoginForm) => {
      const res = await fetch(Endpoints.login, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Не верные данные");

      return res.json();
    },
    onSuccess: (data: { user: TUser }) => {
      useAuthStore.getState().setAuth(data.user);
    },
  });
};
