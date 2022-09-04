import { ThemeOptions } from "@mui/material/styles/createTheme";
import { PaletteMode }  from "@mui/material";

const ThemeConfig = (mode: PaletteMode): ThemeOptions => {
    return {
        palette: {mode: mode},
    };
}

export default ThemeConfig;