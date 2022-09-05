import Card                 from '@mui/material/Card';
import CardContent          from '@mui/material/CardContent';
import Box                  from '@mui/material/Box';
import Match                from 'interfaces/Match';
import Player               from 'interfaces/Player';
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
            <CardContent>
                {props.player.name}
            </CardContent>
        </Card>
    );
};

const CurrentMatch = () => {
    const data: Match = running_matches[0];
    return(
        <Box sx={{display: 'flex'}}>
            <PlayerCard
                player={data.a_player}
                goals={data.goals_a || 0}
            />
            <PlayerCard
                player={data.b_player}
                goals={data.goals_b || 0}
            />
        </Box>
    );
};

export default CurrentMatch;