import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavbar.css";
import * as PATHS from "../../utils/paths";

export default function AdminNavbar(props) {
  return (
    <div>
      <nav className="admin-navbar">
        <Link to={PATHS.VIEWALLORDERS}>View All Orders</Link>

        <Link to={PATHS.CREATEMENU}>Edit your menu</Link>

        <Link to={PATHS.CREATEDISH}>Create new dish</Link>

        <button onClick={props.handleLogout}>Logout</button>
      </nav>
    </div>
  );
}
