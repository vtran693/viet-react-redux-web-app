import * as actionTypes from './actionTypes';

/*
 * action creators
 */
​
export const addTodo = text => ( {
    type: actionTypes.ADD_TODO,
    payload: text
});

export const toggleTodo = index => (  {
    type: actionTypes.TOGGLE_TODO,
    payload:  index
});

export const setVisibilityFilter = (filter) => ({
    type: actionTypes.SET_VISIBILITY_FILTER,
    payload: filter
});
