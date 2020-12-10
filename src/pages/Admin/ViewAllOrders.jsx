import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";

import React from "react";

export default function ViewAllOrders(props) {
  return (
    <div>
      <AdminNavbar handleLogout={props.handleLogout} />
      <h1>This is where admin see all orders</h1>
    </div>
  );
}
