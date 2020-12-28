import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";
import * as PATHS from "../../utils/paths";

////EVENT LISTENER///

const Navbar = (props) => {
  const [isActive, setisActive] = React.useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand navbar-start">
        Pay at the table App
      </Link>

      <div className="navbar-end">
        {props.user ? (
          <>
            <Link to={PATHS.VIEWALLORDERS} className="authLink">
              View All Orders
            </Link>

            <Link to={PATHS.CREATEMENU} className="authLink">
              Edit your menu
            </Link>

            <Link to={PATHS.CREATEDISH} className="authLink">
              Create new dish
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <div
              className={`navbar-item has-dropdown ${
                isActive ? "is-active" : ""
              }`}
            >
              <a onClick={() => setisActive(!isActive)} className="navbar-link">
                Admin Access
              </a>
              <div className="navbar-dropdown is-boxed">
                <Link to="/auth/signup" className="navbar-item">
                  Join?
                </Link>
                <Link to="/auth/login" className="navbar-item">
                  Log In
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

document.addEventListener("DOMContentLoaded", function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".has-dropdown"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
export default Navbar;
