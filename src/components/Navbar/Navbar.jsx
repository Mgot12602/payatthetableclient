import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {
  return (
    <nav>
      <Link to="/" className="nav__projectName">
        Pay at the table App
      </Link>

      <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to="/protected" className="authLink">
              View All Orders
            </Link>
            
            <Link to="/protected" className="authLink">
              Edit your menu
            </Link>
            
            <Link to="/protected" className="authLink">
              Create new dish
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
            <>
              <h4>Admin Access</h4>
            <Link to="/auth/signup" className="authLink">
              Join?
            </Link>
            <Link to="/auth/login" className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
