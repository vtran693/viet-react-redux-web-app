import * as React from 'react';

import * as actionCreators from '../../store/actions/index';

import { connect } from 'react-redux';

const axios = require('axios');

class Menu extends React.Component<any, any>{

    state = {
        menus : []
    }

    componentDidMount(){
        axios.get('http://localhost:8080/menu')
        .then ( (response: any) => {
            const allMenus = response.data.map( (menu: any) => {
                return menu;
            });

            this.setState({menus: allMenus});
        })
        .catch ( (error: any) =>{
            console.log('[ERROR] from ListUsers fetch', error);
        });
    }

    render(){

        return null;

    }
}

export default Menu;