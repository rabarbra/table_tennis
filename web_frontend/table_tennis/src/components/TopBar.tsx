import AppBar               from "@mui/material/AppBar";
import ToggleColorMode      from "components/ToggleColorMode";
import { TOPBAR_HEIGHT }    from "config/config";

const TopBar = () => {
    return(
        <AppBar
            position='static'
            color='transparent'
            sx={{
                boxShadow: 'none',
                height: TOPBAR_HEIGHT}}
        >
            <ToggleColorMode sx={{ml: 'auto'}}/>
        </AppBar>
    );
};

export default TopBar;