import React            from "react";
import createTheme      from '@mui/material/styles/createTheme';
import ThemeProvider    from '@mui/material/styles/ThemeProvider';
import useMediaQuery    from '@mui/material/useMediaQuery';
import * as locales     from '@mui/material/locale';
import CssBaseline      from '@mui/material/CssBaseline';
import { PaletteMode }  from '@mui/material';
import useLocalStorage  from 'hooks/useLocalStorage';
import ThemeConfig      from 'theme/ThemeConfig';


export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function AppTheme(
    { children }: {children: React.ReactNode}
) {
    Object.keys(locales).includes(navigator.language)
    const preferDark = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useLocalStorage<PaletteMode>('mode', preferDark? 'dark': 'light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode(
                    (prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light')
                );
            }
        }),
        [setMode]
    );
    const theme = React.useMemo(
        () => createTheme(ThemeConfig(mode), locales['enUS']),
        [mode]
    );
    return(
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme/>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
