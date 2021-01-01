// import "./Dish.css";

import React, { Component } from "react";

export default class Dish extends Component {
  render() {
    return (
      <div className="box ">
        <div className="level is-mobile">
          <div className="level-left">
            <figure className="image is-96x96 level-item">
              <img
                src={this.props.dish.picture_url}
                alt=""
                // width="100"
                // height="100"
              />
            </figure>
            <div className="level-item">
              <div>
                <p className="  title is-size-4-mobile">
                  {this.props.dish.name}
                </p>
                <p className="heading  is-size-5-mobile">
                  {this.props.dish.tags}
                </p>
              </div>
            </div>
          </div>

          <div className="level-right ">
            <p className="level-item">{this.props.dish.price} €</p>

            <button
              className="button is-link level-item"
              onClick={() =>
                this.props.handleOrder(
                  this.props.dish._id,
                  this.props.tableNumber
                )
              }
            >
              Order
            </button>
          </div>
        </div>
      </div>
    );
  }
}
