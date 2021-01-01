import React, { Component } from "react";
import Dish from "../Dish/Dish";
import { getMenu } from "../../services/menu";
import MenuFooterbar from "./../../components/MenuFooterbar/MenuFooterbar";
import OrderPage from "../../pages/Customer/OrderPage";
import { addDishToOrder, getOrder } from "../../services/order";
import { Link } from "react-router-dom";

export default class MenuList extends Component {
  state = {
    isLoading: true,
    // isLoading2: true,
    menu: [],
    order: null,
    price: 0,
    totalItems: 0,
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

        let units = responsesBack[1][0].dishesOrdered.reduce((acc, el) => {
          return acc + el.units;
        }, 0);

        console.log("units", units);

        this.setState({
          menu: responsesBack[0],
          order: responsesBack[1][0],
          isLoading: false,
          price: price,
          totalItems: units,
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

      let units = newAndUpdatedOrder.dishesOrdered.reduce((acc, el) => {
        return acc + el.units;
      }, 0);

      console.log("units", units);
      this.setState({
        order: newAndUpdatedOrder,
        price: price,
        totalItems: units,
      });
    });
  };

  render() {
    if (this.state.isLoading) {
      console.log("this.state.isLoading before return", this.state.isLoading1);
      return <div>Loading ...</div>;
    }
    console.log("order", this.state.order);
    return (
      <div className="container">
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

        {(this.state.order && (
          <nav className="navbar is-fixed-bottom">
            <div className="container">
              <h1 className="is-size-2 navbar-item">
                Items selected:{" "}
                {/*this.state.order.totalItems*/ this.state.totalItems || "0"}{" "}
                Total: {this.state.price} €{" "}
              </h1>{" "}
              <button className="button is-success navbar-item">
                <Link
                  className="has-text-white"
                  to={`/${this.props.tableNumber}/order`}
                >
                  Finish your Order
                </Link>
              </button>{" "}
            </div>
          </nav>
        )) || <p>Loading...</p>}
      </div>
    );
  }
}
