import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CssBaseline } from "@mui/material";
import { PropsWithChildren } from "react";
import { ThemesProvider } from "@/shared/config/themes/theme-context";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/config/react-query/react-query";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Умный календарь личных целей",
  description: "Умный календарь личных целей",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ru">
      <body className={`${inter.variable}`}>
        <QueryClientProvider client={queryClient}>
          <ThemesProvider>
            <CssBaseline />

            {children}
          </ThemesProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
