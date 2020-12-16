import React from "react";
import { Link } from "react-router-dom";
import "./MenuNavbar.css";

export default function MenuNavbar(props) {
  console.log(props);

  // When the user scrolls the page, execute myFunction

  // Get the navbar

  return (
    <div>
      <nav className="menu-nav-bar">
        <Link to={"/"}>Exit</Link>
        <Link to={`/${props.tableNumber}`}>Menu</Link>
        <Link to={`/${props.tableNumber}/order`}>Order</Link>
        <h1>Table {props.tableNumber}</h1>
      </nav>
    </div>
  );
}
