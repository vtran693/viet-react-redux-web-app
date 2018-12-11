import React, { Component } from 'react';

import UserInfo from '../../components/UserInfo/UserInfo';

import * as actionCreators from '../../store/actions/index';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

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
        const { classes } = this.props;
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


                <Grid container spacing={12}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={1}>
                  
                        <Link to={'/menu'}>
                            <Button variant="contained" className={classes.button}>Go To Menu</Button>
                        </Link>
                   
                    </Grid>
                    <Grid item xs={1}>
                    
                        <Button variant="contained" className={classes.button}>Build Your Own Dish</Button>
                    
                    </Grid>
                    <Grid item xs={5}></Grid>
                </Grid>


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
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));