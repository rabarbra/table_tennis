import Box                  from '@mui/material/Box';
import Card                 from '@mui/material/Card';
import CardContent          from '@mui/material/CardContent';
import CardMedia            from '@mui/material/CardMedia';
import Typography           from '@mui/material/Typography';
import Match                from 'interfaces/Match';
import Player               from 'interfaces/Player';
import * as Avatar          from "images/avatars";
import { running_matches }  from 'interfaces/test_data';

const PlayerCard = (
    props: {
        player: Player,
        goals: number,
        player_2?: string
    }
) => {
    return(
        <Card>
            <CardMedia
                component={Avatar[props.player.avatar]}
            />
            <CardContent>
                <Typography align='center'>
                    {props.player.name}
                </Typography>
                <Typography align='center'>
                    {props.goals}
                </Typography>
            </CardContent>
        </Card>
    );
};

const CurrentMatch = () => {
    const data: Match = running_matches[0];
    return(
        <Box sx={{display: 'flex', alignItems: 'stretch'}}>
            <PlayerCard
                player={data.a_player}
                goals={data.goals_a || 0}
            />
            <Typography variant='h2' sx={{alignSelf: 'center'}}>
                vs
            </Typography>
            <PlayerCard
                player={data.b_player}
                goals={data.goals_b || 0}
            />
        </Box>
    );
};

export default CurrentMatch;