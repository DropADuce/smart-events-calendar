'use client';

import {useThemeContext} from "@/shared/config/themes/theme-context";
import {ToggleThemeView} from "@/features/toggle-theme/view/toggle-theme.view";
import Switcher from "@/features/toggle-theme/ui/switcher";

export const ToggleTheme = () => {
    const { theme, switchTheme } = useThemeContext();

    const checked = theme === 'dark';

    return (
        <ToggleThemeView
            label='Тема'
            switcher={
                <Switcher
                    checked={checked}
                    switchTheme={switchTheme}
                />
            }
        />
    )
}