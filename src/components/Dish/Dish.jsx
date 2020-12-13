import "./Dish.css";

import React, { Component } from "react";

export default class Dish extends Component {
  render() {
    return (
      <div className="dish-container">
        <div className="dish-box">
          <div>
            <img
              src={this.props.dish.picture_url}
              alt=""
              width="100"
              height="100"
            />
          </div>
          <div>
            <h1>{this.props.dish.name}</h1>
            <h2>{this.props.dish.tags}</h2>
          </div>
        </div>
        <div className="dish-pricebox">
          <p>{this.props.dish.price} €</p>

          <button onClick={this.props.handleClick}>Order</button>
        </div>
      </div>
    );
  }
}
