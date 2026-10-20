import { GlobalStyles, ThemeProvider, useMediaQuery } from "@mui/material";
import React from "react";
import { createAppTheme } from "./theme";
import { cssVariables } from "./tokens";

// Picks Light or Dark from the OS setting, applies the MUI theme and exposes
// every token as a CSS variable for the SCSS modules.
const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const mode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
    const theme = React.useMemo(() => createAppTheme(mode), [mode]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles styles={{
                ':root': { ...cssVariables(mode), colorScheme: mode },
                body: { backgroundColor: 'var(--surface-page)', color: 'var(--text-primary)' },
            }} />
            {children}
        </ThemeProvider>
    );
};

export default AppThemeProvider;
