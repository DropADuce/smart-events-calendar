import {createTheme} from "@mui/material/styles";
import {colors} from "@/shared/config/colors/colors";
import {ComponentsOverrides} from "@mui/material/styles/overrides";
import {PaletteOptions} from "@mui/material/styles/createPalette";
import {TypographyOptions} from "@mui/material/styles/createTypography";

const CSSBaseLineOverrides: ComponentsOverrides['MuiCssBaseline'] = {
    body: { display: 'flex', flexDirection: 'column', minHeight: '100vh' }
}

const TypographyOverrides: ComponentsOverrides['MuiTypography'] = {
    h1: { color: colors.primary },
}

const ButtonOverrides: ComponentsOverrides['MuiButton'] = {
    root: {
        borderRadius: 8,
        padding: '8px 16px',
        textTransform: 'none',
    }
}

const SwitchOverrides: ComponentsOverrides['MuiSwitch'] = {
    root: {
        height: 42,
        width: 64,
        padding: 16,
    },
    thumb: {
        width: 24,
        height: 24,
        color: colors.secondary,
    },
    track: {
        backgroundColor: colors.secondary,
    },
    switchBase: {
        '&.Mui-checked .MuiSwitch-thumb': {
            backgroundColor: colors.primary,
        }
    }
}

const TypographyConfig: TypographyOptions = {
    fontFamily: 'var(--font-inter)',
    h1: {
        fontWeight: 600,
        fontSize: '2.25rem',
    },
    h2: {
        fontWeight: 500,
        fontSize: '2rem',
    },
    h3: {
        fontWeight: 400,
        fontSize: '1.75rem',
    },
    body1: {
        fontWeight: 400,
        fontSize: '1rem',
    },
}

const PaletteConfig = (theme: Theme): PaletteOptions => ({
    mode: theme,
    primary: {
        main: colors.primary,
    },
    secondary: {
        main: colors.secondary,
    },
    background: {
        default: theme === 'light' ? colors.backgroundLight : colors.backgroundDark,
        paper: theme === 'light' ? colors.white : colors.dark,
    },
    text: {
        primary: theme === 'light' ? colors.textLight : colors.textDark,
        secondary: theme === 'light' ? colors.textLightSecondary : colors.textDarkSecondary,
    },
    error: {
        main: colors.red,
    },
});

export const lightTheme = createTheme({
    cssVariables: true,
    palette: PaletteConfig('light'),
    typography: TypographyConfig,
    spacing: 8,
    components: {
        MuiButton: {styleOverrides: ButtonOverrides},
        MuiTypography: {styleOverrides: TypographyOverrides},
        MuiSwitch: {styleOverrides: SwitchOverrides},
        MuiCssBaseline: {styleOverrides: CSSBaseLineOverrides}
    }
})

export const darkTheme = createTheme({
    cssVariables: true,
    palette: PaletteConfig('dark'),
    typography: TypographyConfig,
    spacing: 8,
    components: {
        MuiButton: {styleOverrides: ButtonOverrides},
        MuiTypography: {styleOverrides: TypographyOverrides},
        MuiCssBaseline: {styleOverrides: CSSBaseLineOverrides},
        MuiSwitch: {styleOverrides: SwitchOverrides}
    }
})