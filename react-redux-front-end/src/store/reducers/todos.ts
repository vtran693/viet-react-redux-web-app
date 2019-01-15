import * as actionTypes from '../actions/actionTypes'
import { initialState } from './index';

const todos = (state = initialState, action) => {

    switch (action.type) {

        case (actionTypes.ADD_TODO):
            return {
                ...state,
                message: 'ADDED'
            }

        case (actionTypes.LOAD_USER):
            let userData = Object.assign({}, this.state, {
                username : action.payload.username,
                first : action.payload.first,
                last : action.payload.last
            });
            return userData;
        default:
            return state;
    }
}

export default todos;