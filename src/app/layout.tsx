import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {CssBaseline} from "@mui/material";
import {PropsWithChildren} from "react";
import {ThemesProvider} from "@/shared/config/themes/theme-context";

const inter = Inter({
    variable: "--font-inter",
    subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
    title: 'Умный календарь личных целей',
    description: 'Умный календарь личных целей',
};

export default function RootLayout({children}: PropsWithChildren) {
    return (
        <html lang="ru">
            <ThemesProvider>
                <body className={`${inter.variable}`}>
                    <CssBaseline/>

                    {children}
                </body>
            </ThemesProvider>
        </html>
    );
}
