import * as React from 'react';

import { Component } from 'react';

import UserInfo from '../../components/UserInfo/UserInfo';

import * as actionCreators from '../../store/actions/index';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


const axios = require('axios');

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




class Menu extends Component{

    state = {
        menus : []
    }

    componentDidMount(){
        axios.get('http://localhost:8080/menu')
        .then ( response => {
            const allMenus = response.data.map(menu => {
                return menu;
            });

            this.setState({menus: allMenus});
        })
        .catch (error =>{
            console.log('[ERROR] from ListUsers fetch', error);
        })
    ;
    }

    render(){



    }
}

const mapStateToProps = state => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);