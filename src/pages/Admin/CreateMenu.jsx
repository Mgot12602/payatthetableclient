import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";

import React, { Component } from "react";
import { getAllDishes, addDishToMenu } from "../../services/menu";
import { findDOMNode } from "react-dom";
export default class CreateMenu extends Component {
  state = {
    dishes: [],
    selectedDishName: "",
    menu: [],
    user: "",
  };

  componentDidMount = () => {
    console.log("what is the data in this.props.user?", this.props.user);
    getAllDishes().then((responseBack) => {
      // console.log("responseBack:", responseBack);
      this.setState({ dishes: responseBack, user: this.props.user });
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    console.log("this.state.selectedDishName", this.state.selectedDishName);
    const filteredDish = this.state.dishes.filter((el) => {
      console.log(
        `el.name: ${el.name} and this.state.selectedDishName: ${this.state.selectedDishName}`
      );
      return el.name === this.state.selectedDishName;
    });
    console.log("what is filtered dish:", filteredDish);
    const filteredDishAndUser = {
      filteredDish: filteredDish,
      user: this.state.user,
    };

    addDishToMenu(filteredDishAndUser).then((res) => {
      //should return the dishID

      console.log("added dish to menu", this.state.selectedDishName);
      this.setState({
        menu: [...this.state.menu, filteredDish], //should be the menu ID
      });
    });
  };

  handleChange = (event) => {
    console.log(event.target.name, ": ", event.target.value);
    this.setState({
      selectedDishName: event.target.value,
    });
  };

  render() {
    const allDishes = this.state.dishes;
    return (
      <div>
        <AdminNavbar
          handleLogout={this.props.handleLogout}
          onChange={this.handleChange}
        />
        <h1>This is where you admin edits the menu</h1>
        <form onSubmit={this.handleSubmit}>
          <label id="dish">Select the dish to add</label>
          <select
            name="SelectedDishName"
            id="dish"
            value={this.state.selectedDishName}
            onChange={this.handleChange}
          >
            {console.log(this.state.dishes)}
            {allDishes.map((el) => (
              <option>{el.name}</option>
            ))}
          </select>
          <button type="submit">Add to menu</button>
        </form>
        <h1>Current Menu</h1>
        {console.log("this.state.menu", this.state.menu)}
        {/* {this.menu.name.map((el) => (
          <div>{el.name}</div>
        ))} */}
      </div>
    );
  }
}
