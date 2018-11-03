import React, { Component } from 'react';

import { connect } from 'react-redux';

import User


class Home extends Component {






    render(){
        return (

            <UserInfo />


        )
    }
}

const mapStateToProps = state => {
    return {
        users : state.todos
    }
}

export default connect();