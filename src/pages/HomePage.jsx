import logo from "../logo.svg";
import "../App.css";
import Navbar from "../components/Navbar/Navbar";
import { addNewOrder } from "../services/order";

import React, { Component } from "react";

export default class HomePage extends Component {
  state = {
    tableNumber: 0,
  };

  handleChange = (event) => {
    console.log(event.target.name, ": ", event.target.value);

    this.setState({
      tableNumber: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const table = { table: this.state.tableNumber };
    addNewOrder(table)
      .then((order) => {
        console.log("this is the created order", order);
      })
      .then(() => {
        // addNewOrder(this.state.table).then((res) => {
        //   this.setState({
        //     tables: [res, ...this.state.tables],
        //   });
        // });

        this.props.history.push(`/${this.state.tableNumber}`);
      });
  };

  render() {
    return (
      <div>
        <Navbar handleLogout={this.handleLogout} user={this.state.user} />
        <div
          className="main-container"
          style={{ backgroundImage: `url(/images/qr.jpg)` }}
        >
          <h1>Your favorite Restaurant</h1>
          <div className="main-box">
            <div className="option-box">
              <h2>Scan the QR code on your table</h2>
            </div>
            <div>Or</div>
            <div className="option-box">
              
              <form onSubmit={this.handleSubmit}>
               <label id="table-number">
              <h3>  Enter your table Number:</h3>
              </label>
                <input
                  name="tableNumber"
                  type="number"
                  value={this.state.tableNumber}
                  onChange={this.handleChange}
                />
                <button type="submit">Enter</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
