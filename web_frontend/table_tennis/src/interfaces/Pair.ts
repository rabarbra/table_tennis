import Player from 'interfaces/Player';

export default interface Pair {
    id: string;
    a_player: Player;
    b_player: Player;
    umpire?: Player;
    a_player_2?: Player;
    b_player_2?: Player;
};
