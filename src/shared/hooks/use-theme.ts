'use client';

import { useState } from "react";

export interface IUseTheme {
    theme: Theme;
    switchTheme: Func;
}

// TODO: Подвязать управление темой на localStorage
export const useTheme = (): IUseTheme => {
    const [theme, setTheme] = useState<Theme>('dark');

    const switchTheme = () => {
        setTheme((prev) => prev === 'dark' ? 'light' : 'dark');
    }

    return {
        theme,
        switchTheme,
    }
}
