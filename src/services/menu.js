import axios from "axios";

function internalServerError(err) {
  console.log("err:", err.response.data);
  if (err.response && err.response.data && err.response.data.errorMessage) {
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    };
  }
  return {
    status: false,
    errorMessage: "Internal server error. Please check your server",
  };
}

function successStatus(res) {
  return {
    status: true,
    data: res.data,
  };
}

const menuService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

export function addNewDish(dish) {
  return menuService
    .post("/newDish", dish)
    .then((successStatus) => {
      console.log(successStatus);
    })
    .catch(internalServerError);
}

export function addDishToMenu(dish) {
  console.log("dish inside addDishToMenu post call: ", dish);
  return menuService
    .post("/addDishToMenu", dish)
    .then((res) => {
      console.log("res.data inside menujs", res.data);
      return res.data;
    })
    .catch(internalServerError);
}

export function removeDishFromMenu(dish) {
  console.log("dish inside addDishToMenu post call: ", dish);
  return menuService
    .post("/removeDishFromMenu", dish)
    .then((res) => {
      console.log("res.data inside menujs", res.data);
      return res.data;
    })
    .catch(internalServerError);
}

export function getAllDishes() {
  return menuService
    .get("/getAllDishes")
    .then((res) => res.data)
    .catch(internalServerError);
}

export function getMenu() {
  return menuService
    .get("/getMenu")
    .then((res) => res.data)
    .catch(internalServerError);
}
