import Typography       from '@mui/material/Typography';
import Pair             from 'interfaces/Pair';
import { queue_pairs }  from 'interfaces/test_data';

const PairsQueue = () => {
    const data: Pair[] = queue_pairs;
    return(
        <>
            {
                data.map(pair=>(
                    <>
                        <Typography>
                            {`${pair.a_player.name} vs ${pair.b_player.name}`}
                        </Typography>
                    </>
                ))
            }
        </>
    );
};

export default PairsQueue;