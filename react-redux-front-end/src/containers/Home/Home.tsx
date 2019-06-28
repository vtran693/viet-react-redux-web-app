// Import all named exports onto an object named React
import * as React from 'react';

import UserInfo from '../../components/UserInfo/UserInfo';

import * as actionCreators from '../../store/actions/index';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { HomeProps } from '../../interfaces/ComponentInterface';

class Home extends React.Component<HomeProps, any> {

/*
    constructor(props){
        super(props);
        console.log(this.props.users);
    }

    componentDidMount(){

        console.log(this.props.users);
    }
*/

    componentDidMount(){
        this.props.onInitialStateLoad();
    }

    render(){
        return (
            <div className="Home">


                <header>
                    <nav>

                        <Link to="/usersList">List All Users</Link>

                    </nav>
                </header>
                <button onClick={() => this.props.onLoadUserInfo()}>Retrieve Your Information</button>
                <button onClick={() => this.props.onIncrementCounter()}>Increment Counter</button>
                <button onClick={() => this.props.onResetStore()}>Reset Store</button>
                <p>Your Current Counter is: {this.props.counters.currentCounter}</p>
                <p>Your Previous Counter is: {this.props.counters.previousCounter}</p>
                <UserInfo
                    userId={this.props.users.currentUser.userId}
                    username={this.props.users.currentUser.username}
                    firstName = {this.props.users.currentUser.firstName}
                    lastName = {this.props.users.currentUser.lastName}
                />

            </div>
        )
    }
}



const mapStateToProps = (state: any) => {
    return {
        users : state.todos,
        filters: state.visibilityFilter,
        counters: state.counters,
        usersCourses: state.usersCourses
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onLoadUserInfo: () => dispatch(actionCreators.loadUserAPI("1")),
        onIncrementCounter: () => dispatch(actionCreators.incrementCounter()),
        onInitialStateLoad: () => dispatch(actionCreators.loadInitialStateAPI()),
        onResetStore: () => dispatch(actionCreators.resetStore())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);