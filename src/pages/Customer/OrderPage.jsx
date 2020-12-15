import React, { Component } from "react";
import MenuNavbar from "../../components/MenuNavbar/MenuNavbar";
import TableOrder from "../../components/TableOrder/TableOrder";
import Payment from "../../components/Payment/Payment";
import { getMenu } from "../../services/menu";
import { addDishToOrder, getOrder, getTotal } from "../../services/order";

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
      console.log("LOOK HERE MARC", responsesBack);

      this.setState({
        menu: responsesBack[0],
        order: responsesBack[1],
        isLoading: false,
      });
    });
  };

  handleClick = () => {
    getTotal({ table: this.props.match.params.table }).then((total) => {
      console.log("getTotal", total);
      this.setState({ total: total });
    });
  };

  render() {
    if (this.state.isLoading) {
      console.log("this.state.isLoading before return", this.state.isLoading1);
      return <div>Loading ...</div>;
    }

    const tableNumber = this.props.match.params.table;
    return (
      <div>
        {console.log("this.state.order", this.state.order)}
        <MenuNavbar tableNumber={tableNumber} />
        <TableOrder
          order={this.state.order[0]}
          isLoading={this.state.isLoading}
        />
        <button onClick={this.handleClick}>Pay</button>

        <Payment tableNumber={tableNumber} />
      </div>
    );
  }
}
