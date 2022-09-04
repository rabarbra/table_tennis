import React                from "react";
import IconButton           from '@mui/material/IconButton'
import Tooltip              from "@mui/material/Tooltip";
import useTheme             from '@mui/material/styles/useTheme';
import LightMode            from '@mui/icons-material/LightMode';
import DarkMode             from '@mui/icons-material/DarkMode';
import { ColorModeContext } from "theme/AppTheme";

const ToggleColorMode = () => {
    const toggle = React.useContext(ColorModeContext);
    const theme = useTheme();
    return(
        <Tooltip
            title={theme.palette.mode === 'dark' ? 'Light mode' : 'Dark mode'}
        >
            <IconButton
                onClick={()=>toggle.toggleColorMode()}
            >
                {theme.palette.mode === 'dark' ?
                    <LightMode/> : <DarkMode/>
                }
            </IconButton>
        </Tooltip>
    );
};

export default ToggleColorMode;
