import { createTheme, Shadows } from "@mui/material";
import { colorTokens, fontFamilies, shadowTokens, ThemeMode } from "./tokens";

// MUI theme built from the design tokens, so MUI controls (Button, Checkbox, Select, Dialog, Card)
// render with the system's orange primary, surfaces, text colors, radius and elevations.
export function createAppTheme(mode: ThemeMode) {
    const color = colorTokens[mode];
    const shadow = shadowTokens[mode];
    const base = createTheme({ palette: { mode } });

    const shadows = [...base.shadows] as Shadows;
    shadows[1] = shadow['elevation-1'];
    shadows[2] = shadow['elevation-2'];
    shadows[24] = shadow['elevation-24'];

    return createTheme({
        palette: {
            mode,
            primary: {
                main: color['primary'],
                dark: color['primary-dark'],
                light: color['primary-light'],
                contrastText: color['on-primary'],
            },
            background: {
                default: color['surface-page'],
                paper: color['surface-paper'],
            },
            text: {
                primary: color['text-primary'],
                secondary: color['text-secondary'],
                disabled: color['text-disabled'],
            },
            divider: color['divider'],
        },
        typography: {
            fontFamily: fontFamilies.mui,
        },
        shape: {
            borderRadius: 4,
        },
        shadows,
        components: {
            MuiPaper: {
                // MUI lightens dark-mode paper with a gradient overlay; surface-paper is already the final color.
                styleOverrides: { root: { backgroundImage: 'none' } },
            },
            MuiBackdrop: {
                styleOverrides: { root: { '&:not(.MuiBackdrop-invisible)': { backgroundColor: color['backdrop'] } } },
            },
            MuiOutlinedInput: {
                styleOverrides: { notchedOutline: { borderColor: color['outline'] } },
            },
        },
    });
}
