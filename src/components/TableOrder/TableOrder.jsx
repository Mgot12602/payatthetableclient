import React, { Component } from "react";
// import "./TableOrder.css";
import { removeDishFromOrder, getOrder } from "../../services/order";

export default class TableOrder extends Component {
  price = () => {
    return this.props.order.dishesOrdered.reduce((acc, el) => {
      console.log(
        `el.dishType.price : ${el.dishType.price} and el.units: ${el.units}=>acc:${acc} `
      );
      return acc + el.dishType.price * el.units;
    }, 0);
  };

  render() {
    if (this.props.isLoading) {
      console.log("this.state.isLoading before return", this.state.isLoading1);
      return <div>Loading ...</div>;
    }
    if (!this.props.order) {
      console.log("this.state.isLoading before return", this.state.isLoading1);
      return <div>NO ORDERS YET</div>;
    }

    return (
      <div className="table-order-container mx-0">
        {console.log("props.order inside Table order", this.props.order)}

        <table className="table has-text-centered mx-0">
          <thead className="is-size-6-mobile">
            <th>
              <h2 className=" is-size-6-mobile">Item</h2>
            </th>
            <th>
              <h2 className=" is-size-6-mobile ">Units</h2>
            </th>
            <th>
              <h2 className=" is-size-6-mobile"></h2>
            </th>
            <th>
              <h2 className=" is-size-6-mobile">Total</h2>
            </th>
            <th></th>
          </thead>

          <tbody className="has-text-centered">
            {this.props.order.dishesOrdered.map((el) => (
              <tr>
                <td>
                  <p>{el.dishType.name}</p>
                </td>
                <td>
                  {" "}
                  <h3>{el.units} u.</h3>
                </td>
                <td>
                  <h3>{el.dishType.price}€/u.</h3>
                </td>
                <td>
                  {" "}
                  <h3> {el.dishType.price * el.units} €</h3>
                </td>
                <td>
                  {!this.props.order.paid ? (
                    <button
                      className="button is-small is-danger is-light"
                      onClick={() =>
                        this.props.handleRemoveDish(
                          this.props.order,
                          el.dishType._id
                        )
                      }
                    >
                      Remove
                    </button>
                  ) : (
                    <p></p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Total: {this.price()}€</h2>
      </div>
    );
  }
}
