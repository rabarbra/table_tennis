import Typography       from "@mui/material/Typography";
import Container        from "@mui/material/Container";
import PairsQueue       from "components/PairsQueue";
import TopBar           from "components/TopBar";
import CurrentMatch     from "components/CurrentMatch";

const Main = () => {
    return(
        <>
            <TopBar/>
            <Container>
                <Container
                    maxWidth='sm'
                    sx={
                        {display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography>This is fine</Typography>
                    <CurrentMatch/>
                    <PairsQueue/>
                </Container>
            </Container>
        </>
    );
};

export default Main;
