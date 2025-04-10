"use client";

import { ReactElement } from "react";
import { MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import { LOGIN_URL } from "@/features/login/domain/login.constants";

export const LoginMenuButton = (): ReactElement => {
  const router = useRouter();

  return <MenuItem onClick={() => router.push(LOGIN_URL)}>Войти</MenuItem>;
};
