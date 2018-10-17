import * as actionTypes from '../actions/actionTypes'



const visibilityFilter = (state = {}, action) => {

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