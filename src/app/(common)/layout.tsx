import { PropsWithChildren } from "react";
import { Header } from "@/widgets/header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}
