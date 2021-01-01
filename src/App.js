import React from "react";
import { Switch } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import ProtectedPage from "./pages/ProtectedPage";
import Signup from "./pages/Signup";
import NormalRoute from "./routing-components/NormalRoute";
import ProtectedRoute from "./routing-components/ProtectedRoute";
import { getLoggedIn, logout } from "./services/auth";
import * as PATHS from "./utils/paths";
import ViewAllOrders from "./pages/Admin/ViewAllOrders";
import CreateMenu from "./pages/Admin/CreateMenu";
import CreateDish from "./pages/Admin/CreateDish";
import MenuPage from "./pages/Customer/MenuPage";
import OrderPage from "./pages/Customer/OrderPage";
import { Route } from "react-router-dom";

class App extends React.Component {
  state = {
    user: null,
    isLoading: true,
  };

  componentDidMount = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return this.setState({
        isLoading: false,
      });
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        console.log("RES IN CASE OF FAILURE", res);
        // deal with failed backend call
        return this.setState({
          isLoading: false,
        });
      }
      this.setState({
        user: res.data.user,
        isLoading: false,
      });
    });
  };

  handleLogout = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return this.setState({
        user: null,
        isLoading: false,
      });
    }
    this.setState(
      {
        isLoading: true,
      },
      () => {
        logout(accessToken).then((res) => {
          if (!res.status) {
            // deal with error here
            console.log("SOMETHING HAPPENED", res);
          }

          localStorage.removeItem("accessToken");
          return this.setState({
            isLoading: false,
            user: null,
          });
        });
      }
    );
    // this.props.history.push(`/`);
  };

  authenticate = (user) => {
    this.setState({
      user,
    });
  };

  render() {
    if (this.state.isLoading) {
      return <LoadingComponent />;
    }

    return (
      <div>
        <Switch>
          <NormalRoute exact path={PATHS.HOMEPAGE} component={HomePage} />
          <NormalRoute
            exact
            path={PATHS.SIGNUPPAGE}
            authenticate={this.authenticate}
            component={Signup}
          />
          <NormalRoute
            exact
            path={PATHS.LOGINPAGE}
            authenticate={this.authenticate}
            component={LogIn}
          />
          <NormalRoute
            exact
            path={"/:table/order"}
            authenticate={this.authenticate}
            component={OrderPage}
          />
          <NormalRoute
            exact
            path={"/:table"}
            authenticate={this.authenticate}
            component={MenuPage}
          />

          <ProtectedRoute
            exact
            path={PATHS.VIEWALLORDERS}
            component={ViewAllOrders}
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
          <ProtectedRoute
            exact
            path={PATHS.CREATEMENU}
            component={CreateMenu}
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
          <ProtectedRoute
            exact
            path={PATHS.CREATEDISH}
            component={CreateDish}
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
