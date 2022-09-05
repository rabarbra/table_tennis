import React                from "react";
import IconButton           from '@mui/material/IconButton'
import Tooltip              from "@mui/material/Tooltip";
import useTheme             from '@mui/material/styles/useTheme';
import { SxProps }          from "@mui/material";
import LightMode            from '@mui/icons-material/LightMode';
import DarkMode             from '@mui/icons-material/DarkMode';
import { ColorModeContext } from "theme/AppTheme";
import { useTranslation }   from "react-i18next";

const ToggleColorMode = (props: {sx?: SxProps}) => {
    const toggle = React.useContext(ColorModeContext);
    const theme = useTheme();
    const {t} = useTranslation();
    return(
        <Tooltip
            title={
                theme.palette.mode === 'dark' ?
                t('LIGHT_MODE') :
                t('DARK_MODE')
            }
            sx={props.sx}
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
