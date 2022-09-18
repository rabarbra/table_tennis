import Container        from "@mui/material/Container";
import PairsQueue       from "components/PairsQueue";
import CurrentMatch     from "components/CurrentMatch";

const Main = () => {
    return(
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
                <CurrentMatch/>
                <PairsQueue/>
            </Container>
        </Container>
    );
};

export default Main;
