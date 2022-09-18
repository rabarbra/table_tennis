import Player   from 'interfaces/Player';
import Pair     from 'interfaces/Pair';
import Match    from 'interfaces/Match';


export const players: Player[] = [
    {id: '0', name: 'Anna', avatar: 'Avatar7', matches: 0, victories: 0},
    {id: '1', name: 'Mary', avatar: 'Avatar8', matches: 3, victories: 1},
    {id: '2', name: 'John', avatar: 'Avatar1', matches: 5, victories: 2},
    {id: '3', name: 'Lilit', avatar: 'Avatar9', matches: 34, victories: 25},
    {id: '4', name: 'Tigran', avatar: 'Avatar2', matches: 0, victories: 0},
    {id: '5', name: 'Mark', avatar: 'Avatar3', matches: 0, victories: 0},
];

export const queue_players: Player[] = [
    players[2],
    players[3],
    players[0],
];

export const queue_pairs: Pair[] = [
    {id: '0', a_player: players[0], b_player: players[4], umpire: players[1]},
    {id: '1', a_player: players[5], b_player: players[4]},
];



export const running_matches: Match[] = [
    {id: '1', a_player: players[1], b_player: players[4]},
];

export const completed_matches: Match[] = [
    {id: '0', a_player: players[3], b_player: players[2]},
];