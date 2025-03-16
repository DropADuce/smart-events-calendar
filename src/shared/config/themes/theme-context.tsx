'use client';

import {createContext, PropsWithChildren, useContext} from "react";
import {IUseTheme, useTheme} from "@/shared/hooks/use-theme";
import {ThemeProvider} from "@mui/material";
import {THEMES_CONFIG} from "@/shared/config/themes/themes.constants";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";

const Context = createContext<IUseTheme | null>(null);

export const useThemeContext = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error('Провайдер тем не инициализирован');
    }

    return context;
}

export const ThemesProvider = ({children}: PropsWithChildren) => {
    const context = useTheme();

    return (
        <Context.Provider value={context}>
            <AppRouterCacheProvider>
                <ThemeProvider theme={THEMES_CONFIG[context.theme]}>
                    {children}
                </ThemeProvider>
            </AppRouterCacheProvider>
        </Context.Provider>
    )
}