import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import AppBar               from "@mui/material/AppBar";
import ToggleColorMode      from "components/ToggleColorMode";
import { TOPBAR_HEIGHT }    from "config/config";

const TopBar = () => {
    return(
        <AppBar
            position='static'
            color='transparent'
            sx={{
                display: 'flex',
                flexDirection: 'row',
                boxShadow: 'none',
                height: TOPBAR_HEIGHT
            }}
        >
            <IconButton>
                <Menu/>
            </IconButton>
            <ToggleColorMode sx={{ml: 'auto'}}/>
        </AppBar>
    );
};

export default TopBar;