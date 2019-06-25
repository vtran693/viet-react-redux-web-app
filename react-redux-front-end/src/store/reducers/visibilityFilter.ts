import * as actionTypes from '../actions/actionTypes'
import { initialState } from "./index";
import { AppAction } from '../../interfaces/ReduxStoreInterface';

const visibilityFilter = (state = initialState, action: AppAction) => {

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