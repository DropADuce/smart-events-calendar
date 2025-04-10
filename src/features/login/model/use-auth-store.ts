import { create } from "zustand/react";
import { IAuthState, TUser } from "@/features/login/domain/login.types";

export const useAuthStore = create<IAuthState>((set) => ({
  isAuth: false,
  user: null,
  setAuth: (user: TUser) => set({ isAuth: true, user: { ...user } }),
  logout: () => set({ isAuth: false, user: null }),
}));
