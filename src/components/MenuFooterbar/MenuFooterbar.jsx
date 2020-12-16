import React, { Component } from "react";
import "./MenuFooterbar.css";

export default class MenuFooterbar extends Component {
  state = {
    order: null,
    price: 0,
  };

  componentDidMount = () => {
    this.setState({ order: this.props.order });
  };

  //componentDidMount = () => {
  //  // if (this.props.order && this.props.order.dishesOrdered) {
  //  let price = this.props.order.dishesOrdered.reduce((acc, el) => {
  //    console.log(
  //      `el.dishType.price : ${el.dishType.price} and el.units: ${el.units}=>acc:${acc} `
  //    );
  //    return acc + el.dishType.price * el.units;
  //  }, 0);
  //  console.log("prices", price);
  //  this.setState({ order: this.props.order, price: price });
  //};

  //   componentDidUpdate = (prevProps) => {
  //     if (this.props.isLoading !== prevProps.isLoading) {
  //       console.log("called the component DidUpdate");
  //       let price = this.props.order.dishesOrdered.reduce((acc, el) => {
  //         console.log(
  //           `el.dishType.price : ${el.dishType.price} and el.units: ${el.units}=>acc:${acc} `
  //         );
  //         return acc + el.dishType.price * el.units;
  //       }, 0);
  //       console.log("price", price);
  //       this.setState({ order: this.props.order, price: price });
  //     }
  //   };

  render() {
    return (
      <div>
        {(this.state.order && (
          <nav className="nav-MenuFooterbar">
            {" "}
            <h1>
             Items selected: // {this.state.order.totalItems} Total: {" "}
              {this.state.price} €{console.log(this.props.order)}
              {" "}
            </h1>
            {" "}
            {/* <Link to={`/${props.tableNumber}/order`}>Finish your Order</Link> */}
            {" "}
          </nav>
        )) || <p>Loading...</p>}
      </div>

      //     if (this.props.isLoading && !this.props.order) {
      //         console.log("this.state.isLoading before return", this.props.isLoading);
      //         return <div>Loading ...</div>;
      //       }
      //   <div>
      //
      //   </div >
    );
  }
}
