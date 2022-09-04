import Player from 'interfaces/Player';

export default interface Match {
    id: string;
    planned_time?: string;
    begin_time?: string;
    end_time?: string;
    goals_a?: number;
    goals_b?: number;
    a_player: Player;
    b_player: Player;
    umpire?: Player;
    a_player_2?: Player;
    b_player_2?: Player;
};
