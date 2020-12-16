import React, { Component } from "react";
import Dish from "../Dish/Dish";
import { getMenu } from "../../services/menu";
import MenuFooterbar from "./../../components/MenuFooterbar/MenuFooterbar";
import OrderPage from "../../pages/Customer/OrderPage";
import { addDishToOrder, getOrder } from "../../services/order";
import { Link } from "react-router-dom";
import "./MenuList.css";
import "./../MenuFooterbar/MenuFooterbar.css";

export default class MenuList extends Component {
  state = {
    isLoading: true,
    // isLoading2: true,
    menu: [],
    order: null,
    price: 0,
  };
  componentDidMount = () => {
    Promise.all([getMenu(), getOrder({ table: this.props.tableNumber })]).then(
      (responsesBack) => {
        console.log("LOOK HERE MARC", responsesBack[1][0]);
        let price = 0;
        if (responsesBack[1][0].dishesOrdered) {
          price = responsesBack[1][0].dishesOrdered.reduce((acc, el) => {
            // console.log(
            //   `el.dishType.price : ${el.dishType.price} and el.units: ${el.units}=>acc:${acc} `
            // );
            return acc + el.dishType.price * el.units;
          }, 0);
          console.log("price", price);
        }

        this.setState({
          menu: responsesBack[0],
          order: responsesBack[1][0],
          isLoading: false,
          price: price,
        });
      }
    );
  };

  handleOrder = (dishId, table) => {
    const dishAndTable = {
      dishId: dishId,
      table: table,
    };

    console.log("onclick function was executed");

    addDishToOrder(dishAndTable).then((newAndUpdatedOrder) => {
      console.log("This is the updated order", newAndUpdatedOrder);
      let price = newAndUpdatedOrder.dishesOrdered.reduce((acc, el) => {
        console.log(
          `el.dishType.price : ${el.dishType.price} and el.units: ${el.units}=>acc:${acc} `
        );
        return acc + el.dishType.price * el.units;
      }, 0);
      console.log("price", price);

      this.setState({ order: newAndUpdatedOrder, price: price });
    });
  };

  render() {
    if (this.state.isLoading) {
      console.log("this.state.isLoading before return", this.state.isLoading1);
      return <div>Loading ...</div>;
    }
    console.log("order", this.state.order);
    return (
      <div>
        <div className="margin"></div>
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
        <div>
          {(this.state.order && (
            <nav className="nav-MenuFooterbar">
              {" "}
              <h1>
                Items selected: {this.state.order.totalItems || "0"} Total:{" "}
                {this.state.price} €{" "}
              </h1>{" "}
              <button class="button">
                <Link to={`/${this.props.tableNumber}/order`}>
                  Finish your Order
                </Link>
              </button>{" "}
            </nav>
          )) || <p>Loading...</p>}
        </div>
        {/* <MenuFooterbar
          tableNumber={this.props.tableNumber}
          order={this.state.order[0]}
          isLoading={this.state.isLoading}
        /> */}
        <div className="margin-bottom"></div>
      </div>
    );
  }
}
