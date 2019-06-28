import * as actionTypes from './actionTypes';
import { User, Course } from '../../interfaces/ComponentInterface';

const axios = require('axios');

/*
 * action creators
 */
export const addTodo = (text: string) => ( {
    type: actionTypes.ADD_TODO,
    payload: text
});

export const toggleTodo = (index: number) => (  {
    type: actionTypes.TOGGLE_TODO,
    payload:  index
});

export const setVisibilityFilter = (filter: any) => ({
    type: actionTypes.SET_VISIBILITY_FILTER,
    payload: filter
});

export const addUser = (userDetail: User) => {
    return {
        type: actionTypes.ADD_USER,
        payload: userDetail
    }
}

export const loadUser = (userData: any) => {
    return {
        type: actionTypes.LOAD_USER,
        payload: userData
    }
}

export const loadAllUsersCourses = (allUsersCoursesResponse: any) => {
    return {
        type: actionTypes.INITIAL_STATE_LOAD,
        payload: allUsersCoursesResponse
    }
}

export const resetStore = () => {
    return{
        type: actionTypes.RESET_STORE
    }
}

// THIS IS THE THUNK
export const loadUserAPI = (userid: string) => {
    return (dispatch: ({}: {}) => void ) => {
        // Make a request for a user with a given ID
        axios.get('http://localhost:8080/users/' + userid)
            .then(function (response:any) {
                // handle success
                // console.log(response.data);
                console.log('[LoadUserAPI call] Return Data from loadUserAPI', response.data);
                dispatch (loadUser(response.data));
            })
            .catch(function (error:any) {
                // handle error
                console.log(error);
            });
    }
}


export const loadInitialStateAPI = () => {
    return (dispatch: ({}: {}) => void ) => {

        console.log('[actions] loadInitialStateAPI invoked');

        let payload = {
            users: Array<User>(),
            courses: Array<Course>()
        }

        axios.get('http://localhost:8080/users')
            .then(function (usersResponse:any){
                console.log('[loadInitialStateAPI call] Return User Data from loadInitialStateAPI', usersResponse.data);

                usersResponse.data.map( (user: User) => {        
                    payload.users.push( user );
                } );

                axios.get('http://localhost:8080/courses')
                    .then(function (coursesResponse:any) {
                        console.log('[loadInitialStateAPI call] Return Course Data from loadInitialStateAPI', coursesResponse.data);
                        coursesResponse.data.map( (course: Course) => {        
                            payload.courses.push( course );
                        } );

                        console.log('[loadInitialStateAPI] payload after loading users and courses successfully', payload);
                        dispatch (loadAllUsersCourses(payload));
                    })
                    .catch(function (error:any) {
                        // handle error
                        console.log(error);
                    });         
            })
            .catch(function (error:any) {
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


