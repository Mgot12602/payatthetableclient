import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import "./Admin.css";
import React, { Component } from "react";
import { addNewDish } from "../../services/menu";

export default class CreateDish extends Component {
  state = {
    dishes: [],
    name: "",
    description: "",
    tags: "",
    format: "",
    picture_url: "",
    stock: "",
    type: "",
    price: 0,
  };

  handleChange = (event) => {
    console.log(event.target.name, ": ", event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const dish = {
      name: this.state.name,
      description: this.state.description,

      tags: this.state.tags,

      format: this.state.format,
      picture_url: this.state.picture_url,
      stock: this.state.stock,
      type: this.state.type,
      price: this.state.price,
    };
    addNewDish(dish).then((res) => {
      this.setState({
        dishes: [res, ...this.state.dishes],
      });
    });
  };

  render() {
    return (
      <div>
        <AdminNavbar handleLogout={this.props.handleLogout} />
        <h1 className="form-container">Create a new dish</h1>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Description: </label>
          <input
            className="long"
            id="description"
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <label htmlFor="tags">Tags: </label>
          <input
            id="tags"
            name="tags"
            type="text"
            value={this.state.tags}
            onChange={this.handleChange}
          />
          <label htmlFor="format">Format: </label>
          <input
            id="format"
            name="format"
            type="text"
            value={this.state.format}
            onChange={this.handleChange}
          />
          <label htmlFor="picture_url">Picture Url: </label>
          <input
            id="picture_url"
            name="picture_url"
            type="text"
            value={this.state.picture_url}
            onChange={this.handleChange}
          />
          <label htmlFor="stock">Stock: </label>
          <input
            id="stock"
            name="stock"
            type="text"
            value={this.state.stock}
            onChange={this.handleChange}
          />
          <label htmlFor="type">Type: </label>
          <input
            id="type"
            name="type"
            type="text"
            value={this.state.type}
            onChange={this.handleChange}
          />
          <label htmlFor="Price">Price: </label>
          <input
            id="price"
            name="price"
            type="text"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <button id="button-createdish" type="submit">
            Add to your menu
          </button>
        </form>
      </div>
    );
  }
}
