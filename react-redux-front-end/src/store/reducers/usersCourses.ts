import {initialState} from "./initialStates";
import * as actionTypes from "../actions/actionTypes";
import {AppAction} from "../../interfaces/ReduxStoreInterface";
import { Counter, User, Course } from "../../interfaces/ComponentInterface";
import { initialStateCounter } from "./initialStates";


const usersCourses = ( state = initialState, action: AppAction) => {
    switch (action.type) {
        case (actionTypes.INITIAL_STATE_LOAD):

            let allUsers: Array<User> = Array<User>();
            
            action.payload.users.map( (user: User) => {
                allUsers.push(user);   
            });

            let allCourses: Array<Course> = Array<Course>();
            
            action.payload.courses.map( (course: Course) => {
                allCourses.push(course);   
            });

            return {
                ...state,
                users: allUsers,
                courses: allCourses
            }
        
        case (actionTypes.RESET_STORE):
            return Object.assign({}, state, initialState);
            
        default:
            return state;
    }
}

export default usersCourses;