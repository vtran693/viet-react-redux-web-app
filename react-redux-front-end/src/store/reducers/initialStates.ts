import { Counter, InitialState, User, Course } from "../../interfaces/ComponentInterface";

export const initialState: InitialState = {
    currentUser: {
        userId: "",
        username: "",
        firstName: "",
        lastName: ""
    },
    users: Array<User>(),
    courses: Array<Course>() 
}

export const initialStateCounter: Counter = {
    currentCounter: 0,
    previousCounter: 0
};
