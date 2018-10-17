import * as actionTypes from '../actions/actionTypes'
import { initialState } from './index';




const todos = (state = initialState, action) => {

    switch (action.type) {

        case (actionTypes.ADD_TODO):
            return {
                ...state,
                message: 'ADDED'
            }
        default:
            return state;
    }
}

export default todos;