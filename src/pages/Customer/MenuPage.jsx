import React, { Component } from 'react'
import MenuNavbar from './../../components/MenuNavbar/MenuNavbar'
import MenuList from './../../components/MenuList/MenuList'
import MenuFooterbar from './../../components/MenuFooterbar/MenuFooterbar'
import { Route } from "react-router-dom";

export default class MenuPage extends Component {

  

    render() {
       
        const tableNumber = this.props.match.params.table;
      
        return (
            <div>
                 
                <MenuNavbar tableNumber={tableNumber} />
                <h1>Table nº {tableNumber}</h1> 
                <h1>This is the menu where you see all dishes and chooose</h1>
                <MenuList />
                <MenuFooterbar tableNumber={tableNumber} />
                
            </div>
        )
    }
}


