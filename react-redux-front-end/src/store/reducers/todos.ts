import * as actionTypes from '../actions/actionTypes'
import { initialState } from './initialStates';
import {AppAction} from "../../interfaces/ReduxStoreInterface";

const todos = (state = initialState, action: AppAction) => {

    switch (action.type) {

        case (actionTypes.ADD_TODO):
            return {
                ...state,
                message: 'ADDED'
            }

        case (actionTypes.LOAD_USER):
            let userData = Object.assign({}, state, {
                currentUser: {
                    userId: action.payload.userId,
                    username : action.payload.username,
                    firstName : action.payload.firstName,
                    lastName : action.payload.lastName
                }

            });
            return userData;

        case (actionTypes.RESET_STORE):
            return Object.assign({}, state, initialState);
        default:
            return state;
    }
}

export default todos;