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
      <div className="hero is-fullheight-with-navbar">
        <Navbar handleLogout={this.handleLogout} user={this.state.user} />

        <div
          className="section main-image"
          style={{
            backgroundImage: `url(/images/coolrestaurant.jpg)`,
          }}
        >
          <section className="section">
            <div className="tile-ancestor">
              <div className="tile is-parent is-justify-content-center">
                <div className="tile is-child box has-text-centered has-background-primary is-4 is-justify-content-center">
                  <h1 className="title ">The Iron Restaurant</h1>
                </div>
              </div>
            </div>
          </section>
          <div className="section">
            <div className="container ">
              <div className="tile is-ancestor evenly ">
                <div className="tile is-parent  is-4 ">
                  <div className="tile is-child box has-background-primary is-justify-content-center">
                    <h2 className="title has-text-centered">
                      Scan the QR code on your table
                    </h2>
                  </div>
                </div>
                <div className="tile is-parent  is-4 ">
                  <div className="tile is-child box has-background-primary has-text-centered">
                    <form
                      className="is-justify-content-center"
                      onSubmit={this.handleSubmit}
                    >
                      <div className="field">
                        <label className="label" id="table-number">
                          Enter your table Number for the Demo:
                        </label>
                        <div className="control">
                          <div className="column is-4 is-offset-4">
                            <input
                              className="input"
                              name="tableNumber"
                              type="number"
                              value={this.state.tableNumber}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="field ">
                        <div className="control ">
                          <button
                            className="button is-link is-large"
                            type="submit"
                          >
                            Enter
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
