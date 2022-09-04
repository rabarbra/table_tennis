import Typography       from "@mui/material/Typography";
import Box              from "@mui/material/Box";
import PairsQueue       from "components/PairsQueue";
import ToggleColorMode  from "components/ToggleColorMode";

const Main = () => {
    return(
        <Box>
            <ToggleColorMode/>
            <Typography>This is fine</Typography>
            <PairsQueue/>
        </Box>
    );
};

export default Main;
