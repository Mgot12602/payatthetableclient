import React, { Component } from "react";
import Dish from "../Dish/Dish";
import { getMenu } from "../../services/menu";
import MenuFooterbar from "./../../components/MenuFooterbar/MenuFooterbar";
import OrderPage from "../../pages/Customer/OrderPage";
import { addDishToOrder, getOrder } from "../../services/order";

export default class MenuList extends Component {
  state = {
    isLoading1: true,
    isLoading2: true,
    menu: [],
    order: "",
  };
  componentDidMount = () => {
    console.log("component did mount in MenuLIst");
    getMenu().then((responseback) => {
      console.log("get menu in Menu List.jsx", this.state.menu);
      this.setState({ menu: responseback, isLoading1: false });
    });
    console.log("about to execcute getOrder in MenuList");
    getOrder({ table: this.props.tableNumber }).then((receivedOrder) => {
      console.log("this is the received order", receivedOrder);
      this.setState({ order: receivedOrder, isLoading2: false });
    });
  };

  handleOrder = (dishId, table) => {
    const dishAndTable = {
      dishId: dishId,
      table: table,
    };
    console.log("onclick function was executed");
    addDishToOrder(dishAndTable).then((newAndUpdatedOrder) => {
      console.log("This is the updated order", newAndUpdatedOrder);
      //   this.setState({ order: newAndUpdatedOrder });
    });
  };

  render() {
    if (this.state.isLoading1) {
      console.log("this.state.isLoading before return", this.state.isLoading1);
      return <div>Loading ...</div>;
    }
    return (
      <div>
        {this.state.menu[0].dishes.map((el) => (
          <div>
            <Dish
              key={el.name}
              dish={el}
              tableNumber={this.props.tableNumber}
              handleOrder={this.handleOrder}
            />
          </div>
        ))}
        <MenuFooterbar
          tableNumber={this.props.tableNumber}
          order={this.state.order}
          isLoading2={this.state.isLoading2}
        />
      </div>
    );
  }
}
