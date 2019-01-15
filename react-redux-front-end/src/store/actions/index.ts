import * as actionTypes from './actionTypes';

const axios = require('axios');

/*
 * action creators
 */
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

export const addUser = userDetail => {
    return {
        type: actionTypes.ADD_USER,
        payload: userDetail
    }
}

export const loadUser = userData => {
    return {
        type: actionTypes.LOAD_USER,
        payload: userData
    }
}

export const loadUserAPI = userid => {
    return dispatch => {
        // Make a request for a user with a given ID
        axios.get('http://localhost:8080/users/' + userid)
            .then(function (response) {
                // handle success
                // console.log(response.data);
                console.log('[LoadUserAPI call] Return Data from API call', response.data);
                dispatch (loadUser(response.data));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
}

export const incrementCounter = () => {
    return {
        type: actionTypes.INCREMENT_COUNTER
    }
}


