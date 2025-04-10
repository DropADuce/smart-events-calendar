import { useQuery } from "@tanstack/react-query";
import { TUser } from "@/features/login/domain/login.types";
import { Endpoints } from "@/entities/user";
import { useAuthStore } from "@/features/login/model/use-auth-store";

export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const res = await fetch(Endpoints.me, {
        method: "POST",
        credentials: "include",
      });

      if (!res.ok) throw new Error("Not authorized");

      const data: TUser = await res.json();

      if (data) useAuthStore.getState().setAuth(data);

      return data;
    },
    retry: false,
  });
};
