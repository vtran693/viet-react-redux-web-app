import { string } from "prop-types";

export interface UserInfoProps {
    username: string;
    firstName: string;
    lastName: string;
}

export interface HomeProps {
    loadUserInfo: () => void;
    onIncrementCounter: () => void;
    counters: Counters;
    users: User;
}

export interface User {
    userId: string;
    username: string;
    first: string;
    last: string; 
}



export interface Counters {
    previousCounter: number;
    currentCounter: number;
}

