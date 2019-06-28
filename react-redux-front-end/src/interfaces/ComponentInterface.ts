import { string } from "prop-types";


export interface InitialState {
    currentUser: User;
    users: Array<User>;
    courses: Array<Course>;
}

export interface UserInfoProps {
    userId: string;
    username: string;
    firstName: string;
    lastName: string;
}

export interface HomeProps {
    onLoadUserInfo: () => void;
    onIncrementCounter: () => void;
    onInitialStateLoad: () => void;
    onResetStore: () => void;
    counters: Counter;
    users: InitialState;
}

export interface User {
    userId: string;
    username: string;
    firstName: string;
    lastName: string; 
}

export interface Course { 
    courseName: string;
    courseCode: string;
}

export interface Counter {
    previousCounter: number;
    currentCounter: number;
}

