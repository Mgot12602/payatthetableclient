import React, { Component } from "react";
import MenuNavbar from "../../components/MenuNavbar/MenuNavbar";
import TableOrder from "../../components/TableOrder/TableOrder";
import Payment from "../../components/Payment/Payment";
import { getMenu } from "../../services/menu";
import {
  addDishToOrder,
  getOrder,
  getTotal,
  changeToPaid,
  removeDishFromOrder,
  getAllOrders,
} from "../../services/order";
import "./OrderPage.css";
export default class OrderPage extends Component {
  state = {
    isLoading: true,
    // isLoading2: true,
    menu: [],
    order: null,
    total: 0,
  };
  componentDidMount = () => {
    Promise.all([
      getMenu(),
      getOrder({ table: this.props.match.params.table }),
    ]).then((responsesBack) => {
      console.log("responsesBackInDidMount", responsesBack);

      this.setState({
        menu: responsesBack[0],
        order: responsesBack[1][0],
        isLoading: false,
      });
    });
  };

  changeToPaid = () => {
    changeToPaid({ table: this.props.match.params.table }).then(
      (responseBack) => {
        console.log("this is the responseback in ChangeToPaid:", responseBack);
        this.setState({ order: responseBack[0] });
      }
    );
  };

  handleRemoveDish = (order, dishId) => {
    console.log("this is order in handleRemove ", order);
    console.log("this is dishId in handleRemove ", dishId);

    removeDishFromOrder({ orderId: order._id, dishId: dishId }).then(
      (order) => {
        console.log("received orders after removing", order);

        this.setState({ order: order[0] });
      }
    );
  };

  handleClick = () => {
    getTotal({ table: this.props.match.params.table }).then((total) => {
      console.log("getTotal", total);
      this.setState({ total: total });
    });
  };

  render() {
    if (this.state.isLoading) {
      console.log("this.state.isLoading before return", this.state.isLoading);
      return <div>Loading ...</div>;
    }

    const tableNumber = this.props.match.params.table;
    return (
      <div className="orderpage-container">
        {console.log("this.state.order", this.state.order)}

        <MenuNavbar tableNumber={tableNumber} />
        <div>
          <TableOrder
            order={this.state.order}
            isLoading={this.state.isLoading}
            handleRemoveDish={this.handleRemoveDish}
            tableNumber={tableNumber}
          />
        </div>
        <div>
          {this.state.order.paid ? (
            <h3 id="green">
              Thank you! Your dish is being prepared and soon we will serve you.{" "}
            </h3>
          ) : (
            <h3 id="red">Pending to pay</h3>
          )}
          {this.state.order.paid ? (
            ""
          ) : (
            <Payment
              tableNumber={tableNumber}
              changeToPaid={this.changeToPaid}
            />
          )}
        </div>
      </div>
    );
  }
}
