import React, { Component } from "react";

export default class MenuFooterbar extends Component {
  render() {
    if (this.props.isLoading2) {
      console.log("this.state.isLoading before return", this.state.isLoading2);
      return <div>Loading ...</div>;
    }
    return (
      <div>
        <nav>
          <h1>
            Items selected: {this.props.order[0].totalItems} Total:{" "}
            {this.props.order[0].totalPrice} €{console.log(this.props.order)}
          </h1>
          {/* <Link to={`/${props.tableNumber}/order`}>Finish your Order</Link> */}
        </nav>
      </div>
    );
  }
}
