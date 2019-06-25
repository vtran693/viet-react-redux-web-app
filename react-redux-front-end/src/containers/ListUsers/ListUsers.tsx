
import * as React from 'react';
import { Route, Link} from "react-router-dom";
import Home from '../Home/Home';
import { User } from '../../interfaces/ComponentInterface';

class ListUsers extends React.Component<any, any> {
    state = {
        users: []
    }

    componentDidMount (){
        const axios = require('axios');
        axios.get('http://localhost:8080/users')
            .then ( (response: any) => {
                const allUsers = response.data.map( (user: User) => {
                    return user;
                });

                this.setState({users: allUsers});
            })
            .catch ( (error: any) =>{
                console.log('[ERROR] from ListUsers fetch', error);
            })
        ;
    }

    render(){
        let listUsers = this.state.users.map ( (user: User) => {
            return (
                <div key={user.userId}>
                    <h3>username: {user.username}</h3>
                    <ul>
                        <li>First Name: {user.first}</li>
                        <li>Last Name: {user.last}</li>
                    </ul>
                </div>
            )
        });
        return (
            <div className="ListUsers">
                <header>
                    <nav>
                        <Link to="/">Back To Home</Link>
                    </nav>
                </header>
                {listUsers}

            </div>
        )
    }
}

export default ListUsers;