import AdminNavbar from "../../components/AdminNavbar/AdminNavbar"

import React, { Component } from 'react'

export default class CreateMenu extends Component {
    render() {
        return (
            <div>
                <AdminNavbar handleLogout={this.props.handleLogout }/>
                <h1>This is where you admin edits the menu</h1>
            </div>
        )
    }
}


