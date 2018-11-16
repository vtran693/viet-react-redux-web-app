import React, { Component } from 'react';

import UserInfo from '../../components/UserInfo/UserInfo';

import ListUsers from '../ListUsers/ListUsers';

import * as actionCreators from '../../store/actions/index';

import { connect } from 'react-redux';

import { Link, Route } from 'react-router-dom';

class Home extends Component {


/*
    constructor(props){
        super(props);
        console.log(this.props.users);
    }

    componentDidMount(){

        console.log(this.props.users);
    }
*/


    render(){
        return (
            <div className="Home">


                <header>
                    <nav>

                        <Link to="/usersList">List All Users</Link>

                    </nav>
                </header>
                <button onClick={this.props.loadUserInfo}>Click Me</button>
                <button onClick={() => this.props.onIncrementCounter()}>Increment Counter</button>

                <p>Your Current Counter is: {this.props.counters.currentCounter}</p>
                <p>Your Previous Counter is: {this.props.counters.previousCounter}</p>
                <UserInfo
                    username={this.props.users.username}
                    firstName = {this.props.users.first}
                    lastName = {this.props.users.last}
                />

            </div>

        )
    }
}



const mapStateToProps = state => {
    return {
        users : state.todos,
        filters: state.visibilityFilter,
        counters: state.counters
    }
}

const mapDispatchToProps = dispatch => {
    return{
        loadUserInfo: () => dispatch(actionCreators.loadUserAPI("1")),
        onIncrementCounter: () => dispatch(actionCreators.incrementCounter())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);