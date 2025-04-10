"use client";

import { PropsWithChildren } from "react";
import { useMe } from "@/entities/user/api/use-me";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { isLoading } = useMe();

  if (isLoading) return <div>...Loading...</div>;

  return <>{children}</>;
};
