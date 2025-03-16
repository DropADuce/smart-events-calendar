import { Theme as ThemeConfig} from "@mui/material/styles";
import {darkTheme, lightTheme} from "@/shared/config/themes/themes.config";

export const THEMES_CONFIG: Record<Theme, ThemeConfig> = {
    light: lightTheme,
    dark: darkTheme,
}