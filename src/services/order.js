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

const orderService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/order`,
});

export function addNewOrder(table) {
  return orderService
    .post("/addNewOrder", table)
    .then((res) => {
      return res.data;
    })
    .catch(internalServerError);
}

export function addDishToOrder(dishAndTable) {
  return orderService
    .post("/addDishToOrder", dishAndTable)
    .then((res) => {
      return res.data;
    })
    .catch(internalServerError);
}
export function getOrder(tableNumber) {
  return orderService
    .post("/getOrder", tableNumber)
    .then((res) => {
      return res.data;
    })
    .catch(internalServerError);
}

export function getTotal(table) {
  return orderService
    .post("/getTotal", table)
    .then((res) => {
      return res.data;
    })
    .catch(internalServerError);
}

export function changeToPaid(table) {
  return orderService
    .post("/changeToPaid", table)
    .then((res) => {
      return res.data;
    })
    .catch(internalServerError);
}

export function getAllOrders() {
  return orderService
    .get("/getAllOrders")
    .then((res) => {
      return res.data;
    })
    .catch(internalServerError);
}

export function clearTable(table) {
  return orderService
    .post("/clearTable", table)
    .then((res) => {
      return res.data;
    })
    .catch(internalServerError);
}
export function removeDishFromOrder(orderIdAndDish) {
  return orderService
    .post("/removeDishFromOrder", orderIdAndDish)
    .then((res) => {
      return res.data;
    })
    .catch(internalServerError);
}
