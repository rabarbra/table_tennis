import AppBar from "@mui/material/AppBar";
import ToggleColorMode from "components/ToggleColorMode";

const TopBar = () => {
    return(
        <AppBar
            position='static'
            color='transparent'
            sx={{boxShadow: 'none'}}
        >
            <ToggleColorMode sx={{ml: 'auto'}}/>
        </AppBar>
    );
};

export default TopBar;