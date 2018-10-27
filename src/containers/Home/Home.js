import React, { Component } from 'react';

import { connect } from 'react-redux';


class Home extends Component {






    render(){
        return (<div
            className="Home"

            ></div>)
    }
}

const mapStateToProps = state => {
    return {
        users : state.todos;
    }
}

export default connect();