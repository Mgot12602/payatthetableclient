import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";
import * as PATHS from "../../utils/paths";

////EVENT LISTENER///

const Navbar = (props) => {
  const [isActive, setisActive] = React.useState("");

  return (
    <nav className="navbar has-background-primary is-fixed-top">
      <div className="container">
        <div className="navbar-start">
          <Link to="/" className=" navbar-item is-size-3 is-size-5-mobile">
            Pay at the table App
          </Link>
        </div>
        <div className="navbar-end">
          {props.user ? (
            <>
              <Link to={PATHS.VIEWALLORDERS} className=" navbar-item">
                View All Orders
              </Link>

              <Link to={PATHS.CREATEMENU} className=" navbar-item">
                Edit your menu
              </Link>

              <Link to={PATHS.CREATEDISH} className=" navbar-item">
                Create new dish
              </Link>
              <button className=" navbar-item" onClick={props.handleLogout}>
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
                <a
                  onClick={() => setisActive(!isActive)}
                  className="navbar-link"
                >
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
      </div>
    </nav>
  );
};

export default Navbar;
