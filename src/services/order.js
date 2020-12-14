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
  console.log("table inside Order Service", table);
  return orderService
    .post("/addNewOrder", table)
    .then((res) => {
      console.log("this is the new order in blank from the server", res.data);
      return res.data;
    })
    .catch(internalServerError);
}

export function addDishToOrder(dishAndTable) {
  return orderService
    .post("/addDishToOrder", dishAndTable)
    .then((res) => {
      console.log("new and updated orderfrom the server", res.data);
      return res.data;
    })
    .catch(internalServerError);
}
export function getOrder(tableNumber) {
  return orderService
    .post("/getOrder", tableNumber)
    .then((res) => {
      console.log("this is the response of the getOrder function", res.data);
      return res.data;
    })
    .catch(internalServerError);
}

export function getTotal(table) {
  return orderService
    .post("/getTotal", table)
    .then((res) => {
      console.log("this is the get total in order service", res.data);
      return res.data;
    })
    .catch(internalServerError);
}
