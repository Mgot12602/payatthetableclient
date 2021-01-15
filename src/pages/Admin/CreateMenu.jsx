import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import "./Admin.css";

import React, { Component } from "react";
import {
  getAllDishes,
  addDishToMenu,
  getMenu,
  removeDishFromMenu,
} from "../../services/menu";
import { findDOMNode } from "react-dom";
export default class CreateMenu extends Component {
  state = {
    dishes: [],
    selectedDishName: "",
    menu: [],
    user: "",
    isLoading: true,
  };

  componentDidMount = () => {
    console.log("what is the data in this.props.user?", this.props.user);
    getAllDishes().then((responseBack) => {
      this.setState({ dishes: responseBack, user: this.props.user });
    });
    getMenu().then((responseback) => {
      this.setState({ menu: responseback, isLoading: false });
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const filteredDish = this.state.dishes.filter((el) => {
      return el.name === this.state.selectedDishName;
    });

    const filteredDishAndUser = {
      filteredDish: filteredDish,
      user: this.state.user,
    };

    addDishToMenu(filteredDishAndUser).then((res) => {
      this.setState({
        menu: res,
      });
    });
  };

  handleRemove = (event) => {
    event.preventDefault();

    console.log("this.state.selectedDishName", this.state.selectedDishName);
    const filteredDish = this.state.dishes.filter((el) => {
      //   console.log(
      //     `el.name: ${el.name} and this.state.selectedDishName: ${this.state.selectedDishName}`
      //   );
      return el.name === this.state.selectedDishName;
    });

    const filteredDishAndUser = {
      filteredDish: filteredDish,
      user: this.state.user,
    };

    removeDishFromMenu(filteredDishAndUser).then((res) => {
      this.setState({
        menu: res,
      });
    });
  };

  handleChange = (event) => {
    this.setState({
      selectedDishName: event.target.value,
    });
  };

  render() {
    const allDishes = this.state.dishes;
    if (this.state.isLoading) {
      return <div>Loading ...</div>;
    }

    return (
      <div>
        <AdminNavbar
          handleLogout={this.props.handleLogout}
          onChange={this.handleChange}
        />
        <div className="createMenuContainer">
          <form onSubmit={this.handleSubmit}>
            <label id="dish">Select the dish to add:</label>
            <select
              name="SelectedDishName"
              id="dish"
              value={this.state.selectedDishName}
              onChange={this.handleChange}
            >
              {allDishes.map((el) => (
                <option>{el.name}</option>
              ))}
            </select>
            <button id="green" type="submit">
              Add to menu
            </button>
          </form>
          <div className="createMenuContainer">
            <h1>Current Menu</h1>

            {this.state.menu[0].dishes.map((el) => (
              <div>{el.name}</div>
            ))}
          </div>
          <form onSubmit={this.handleRemove}>
            <label id="dish">Select the dish to remove:</label>
            <select
              name="SelectedDishName"
              id="dish"
              value={this.state.selectedDishName}
              onChange={this.handleChange}
            >
              {allDishes.map((el) => (
                <option>{el.name}</option>
              ))}
            </select>
            <button id="red" type="submit">
              Remove
            </button>
          </form>
        </div>
      </div>
    );
  }
}
