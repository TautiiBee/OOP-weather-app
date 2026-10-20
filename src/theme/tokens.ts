// Design tokens from the "Weather App" design system (project/tokens.json).
// Colors and shadows have a light and a dark value; everything else is shared.

export type ThemeMode = 'light' | 'dark';

export const colorTokens: Record<ThemeMode, Record<string, string>> = {
    light: {
        'surface-page': '#ffffff',
        'surface-paper': '#ffffff',
        'ink': '#292929',
        'ink-icon': '#0f0f0f',
        'ink-icon-wind': '#2e3436',
        'text-primary': 'rgba(0, 0, 0, 0.87)',
        'text-secondary': 'rgba(0, 0, 0, 0.6)',
        'text-disabled': 'rgba(0, 0, 0, 0.26)',
        'primary': '#c2410c',
        'primary-dark': '#9a3412',
        'primary-light': '#fb923c',
        'on-primary': '#ffffff',
        'divider': 'rgba(0, 0, 0, 0.12)',
        'outline': 'rgba(0, 0, 0, 0.23)',
        'backdrop': 'rgba(0, 0, 0, 0.5)',
    },
    dark: {
        'surface-page': '#121212',
        'surface-paper': '#1e1e1e',
        'ink': '#e0e0e0',
        'ink-icon': '#f0f0f0',
        'ink-icon-wind': '#d3d7cf',
        'text-primary': '#ffffff',
        'text-secondary': 'rgba(255, 255, 255, 0.7)',
        'text-disabled': 'rgba(255, 255, 255, 0.3)',
        'primary': '#fb923c',
        'primary-dark': '#fdba74',
        'primary-light': '#9a3412',
        'on-primary': '#1a1a1a',
        'divider': 'rgba(255, 255, 255, 0.12)',
        'outline': 'rgba(255, 255, 255, 0.23)',
        'backdrop': 'rgba(0, 0, 0, 0.7)',
    },
};

export const shadowTokens: Record<ThemeMode, Record<string, string>> = {
    light: {
        'elevation-1': '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        'elevation-2': '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        'elevation-24': '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
    },
    dark: {
        'elevation-1': '0px 2px 1px -1px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.28), 0px 1px 3px 0px rgba(0,0,0,0.24)',
        'elevation-2': '0px 3px 1px -2px rgba(0,0,0,0.4), 0px 2px 2px 0px rgba(0,0,0,0.28), 0px 1px 5px 0px rgba(0,0,0,0.24)',
        'elevation-24': '0px 11px 15px -7px rgba(0,0,0,0.4), 0px 24px 38px 3px rgba(0,0,0,0.28), 0px 9px 46px 8px rgba(0,0,0,0.24)',
    },
};

export const fontFamilies = {
    system: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    mui: '"Roboto", "Helvetica", "Arial", sans-serif',
};

export const sharedTokens: Record<string, string> = {
    'space-0-5': '2px',
    'space-2': '8px',
    'space-4': '16px',
    'space-5': '20px',
    'space-6': '24px',
    'radius-sm': '4px',
    'radius-round': '50%',
    'icon-metric': '30px',
    'icon-condition': '50px',
    'card-min-width': '350px',
    'dialog-width': '200px',
    'font-system': fontFamilies.system,
    'font-mui': fontFamilies.mui,
};

// All tokens for one theme as CSS custom properties, e.g. { '--primary': '#c2410c' }.
export function cssVariables(mode: ThemeMode): Record<string, string> {
    const all = { ...sharedTokens, ...colorTokens[mode], ...shadowTokens[mode] };
    return Object.fromEntries(Object.entries(all).map(([name, value]) => [`--${name}`, value]));
}
