import Box                  from "@mui/material/Box";
import Card                 from "@mui/material/Card";
import CardContent          from '@mui/material/CardContent';
import CardMedia            from "@mui/material/CardMedia";
import Typography           from "@mui/material/Typography";
import * as Avatar          from "images/avatars";
import Player               from 'interfaces/Player';
import { TOPBAR_HEIGHT }    from "config/config";
import { players }          from 'interfaces/test_data';

const Profile = () => {
    const player: Player = players[2];
    return(
        <Box
            maxWidth='sm'
            sx={{
                height: '100%',
                mx: 'auto',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Card
                sx={{
                    margin: 'auto',
                    padding: 2,
                    transform: `translateY(-${TOPBAR_HEIGHT / 2}px)`
                }}
            >
                <CardMedia
                    sx={{width: '100%', minHeight: 300}}
                    component={Avatar[player.avatar]}
                />
                <CardContent>
                    <Typography
                        align="center"
                        variant="h5"
                    >
                        {player.name}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Profile;