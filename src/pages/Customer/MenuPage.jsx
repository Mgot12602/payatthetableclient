import React, { Component } from "react";
import MenuNavbar from "./../../components/MenuNavbar/MenuNavbar";
import MenuList from "./../../components/MenuList/MenuList";

import { Route } from "react-router-dom";

export default class MenuPage extends Component {
  render() {
    const tableNumber = this.props.match.params.table;

    return (
      <div>
        <MenuNavbar tableNumber={tableNumber} />

        <MenuList tableNumber={tableNumber} />
      </div>
    );
  }
}
