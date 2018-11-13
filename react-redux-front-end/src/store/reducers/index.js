const axios = require('axios');

let loggedInUser = '';

// Make a request for a user with a given ID
axios.get('http://localhost:8080/users/1')
    .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data);
        loggedInUser = response.data;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });


//
// let loggedInUserId =
//
// // export const initialState = {
// //     name: 'Viet Tran',
// //     index: 10,
// //     message: 'Hello'
// // }

export const initialState = loggedInUser;