import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import React, { Component } from "react";
import { getAllOrders, clearTable } from "../../services/order";
import "./Admin.css";

export default class ViewAllOrders extends Component {
  state = {
    orders: null,
  };

  componentDidMount = () => {
    getAllOrders().then((orders) => {
      console.log("Look here Marc", orders);
      this.setState({ orders: orders });
    });
  };

  handleClear = (table) => {
    clearTable({ table: table }).then((orders) => {
      console.log("received orders after clearing", orders);
      getAllOrders().then((orders) => {
        console.log("Look here Marc2", orders);
        this.setState({ orders: orders });
      });
      // this.setState({ orders: orders });
    });
  };

  render() {
    if (!this.state.orders) {
      console.log("this.state.isLoading before return", this.state.orders);
      return <div>NO ORDERS ...</div>;
    }
    return (
      <div>
        <AdminNavbar handleLogout={this.props.handleLogout} />
        <div className="viewallorders-container">
          {this.state.orders.map((el, index) => (
            <div className="allOrders-container">
              <h2>table: {el.table}</h2>

              {el.dishesOrdered.map((val) => (
                <div>
                  <tr>
                    <td>{val.units}</td>
                    <td>
                      {"  "}
                      &nbsp;&nbsp; {val.dishType.name}
                    </td>
                  </tr>
                </div>
              ))}
              <button onClick={() => this.handleClear(el.table)}>
                Clear order
              </button>
            </div>
          ))}

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
      </div>
    );
  }
}
