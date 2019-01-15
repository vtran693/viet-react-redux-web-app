import * as actionTypes from '../actions/actionTypes'
import {initialState} from "./index";


const visibilityFilter = (state = initialState, action) => {

    switch (action.type) {

        case (actionTypes.SET_VISIBILITY_FILTER):
            return {
                ...state,
                message: 'SET_VISIBILITY'
            }
        default:
            return state;
    }
}

export default visibilityFilter;