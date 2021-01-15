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
      
        this.setState({ order: responseBack[0] });
      }
    );
  };

  handleRemoveDish = (order, dishId) => {
   

    removeDishFromOrder({ orderId: order._id, dishId: dishId }).then(
      (order) => {
    

        this.setState({ order: order[0] });
      }
    );
  };

  handleClick = () => {
    getTotal({ table: this.props.match.params.table }).then((total) => {
  
      this.setState({ total: total });
    });
  };

  render() {
    if (this.state.isLoading) {
      
      return <div>Loading ...</div>;
    }

    const tableNumber = this.props.match.params.table;
    return (
      <div className="has-navbar-fixed-top">
        

        <MenuNavbar tableNumber={tableNumber} />
        <div className="section mx-0">
          <TableOrder
            order={this.state.order}
            isLoading={this.state.isLoading}
            handleRemoveDish={this.handleRemoveDish}
            tableNumber={tableNumber}
          />
        </div>
        <div className="section">
          <div className="container">
            {this.state.order.paid ? (
              <h3 className="has-text-success">
                Thank you! Your dish is being prepared and soon we will serve
                you.{" "}
              </h3>
            ) : (
              <h3 className="has-text-danger">Pending to pay</h3>
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
      </div>
    );
  }
}
