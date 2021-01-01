import React from "react";
import { Link } from "react-router-dom";
// import "./MenuNavbar.css";

export default function MenuNavbar(props) {
  console.log(props);

  // When the user scrolls the page, execute myFunction

  // Get the navbar

  return (
    <div className="columns">
      <div className="column is-full is-mobile">
        <nav className="navbar is-fixed-top has-background-primary">
          <div className="container">
            <h1 className="navbar-item navbar-start title is-size-6-mobile">
              Table {props.tableNumber}
            </h1>
            <Link className="navbar-item" to={`/${props.tableNumber}`}>
              Menu
            </Link>
            <Link className="navbar-item" to={`/${props.tableNumber}/order`}>
              Order
            </Link>
            <Link className="navbar-item navbar-end" to={"/"}>
              Exit
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
