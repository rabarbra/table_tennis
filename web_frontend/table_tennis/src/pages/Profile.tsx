import Typography   from "@mui/material/Typography";
import Card         from "@mui/material/Card";
import CardContent  from '@mui/material/CardContent';
import CardMedia    from "@mui/material/CardMedia";
import Container    from "@mui/material/Container";
import * as Avatar  from "images/avatars";
import Player       from 'interfaces/Player';
import { players }  from 'interfaces/test_data';

const Profile = () => {
    const player: Player = players[0];
    return(
        <Container maxWidth='sm'>
            <Card>
                <CardMedia component={Avatar[player.avatar]}/>
                <CardContent>
                    <Typography>{player.name}</Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Profile;