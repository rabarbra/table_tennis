import * as avatar from 'images/avatars';

export default interface Player {
    id: string;
    name: string;
    email?: string;
    avatar: keyof typeof avatar;
    matches: number;
    victories: number;
};
