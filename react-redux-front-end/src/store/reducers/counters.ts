import {initialState} from "./index";
import * as actionTypes from "../actions/actionTypes";

let initialStateCounter = {
    currentCounter: 0,
    previousCounter: 0
}

const counters = (state = initialStateCounter, action) => {
    switch (action.type) {
        case (actionTypes.INCREMENT_COUNTER):
            return {
                ...state,
                previousCounter: state.currentCounter,
                currentCounter: state.currentCounter + 1
            }
        default:
            return state;
    }
}

export default counters;