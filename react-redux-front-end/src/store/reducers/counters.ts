import * as actionTypes from "../actions/actionTypes";
import {AppAction} from "../../interfaces/ReduxStoreInterface";
import { initialStateCounter } from "./initialStates";


const counters = (state = initialStateCounter, action: AppAction) => {
    switch (action.type) {
        case (actionTypes.INCREMENT_COUNTER):
            return {
                ...state,
                previousCounter: state.currentCounter,
                currentCounter: state.currentCounter + 1
            }
        case (actionTypes.RESET_STORE):
            return Object.assign({}, state, initialStateCounter);
        default:
            return state;
    }
}

export default counters;