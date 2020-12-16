import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import React, { Component } from "react";

export default class ViewAllOrders extends Component {
  // getallOrders().then((Orders)=> {

  // })

  render() {
    return (
      <div>
        <AdminNavbar handleLogout={this.props.handleLogout} />

        {/* <table>
            <tr>
              <th>
                <h2>Item</h2>
              </th>
              <th>
                <h2>Units</h2>
              </th>
             
            </tr>
            {this.props.order.dishesOrdered.map((el) => (
              <tr>
                <td>
                  <h3>{el.dishType.name}</h3>
                </td>
                <td>
                  {" "}
                  <h3>{el.units} u.</h3>
                </td>
               
              </tr>
            ))}
          </table> */}
      </div>
    );
  }
}
