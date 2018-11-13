import React, { Component } from 'react';

import UserInfo from '../../components/UserInfo/UserInfo';

import { connect } from 'react-redux';


class Home extends Component {






    render(){
        return (

            <UserInfo UserInfo={this.props.users}/>


        )
    }
}

const mapStateToProps = state => {
    return {
        users : state.todos
    }
}

export default connect(mapStateToProps)(Home);