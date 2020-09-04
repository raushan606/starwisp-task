import React, { Component } from "react";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Add from "./components/Add";
import View from "./components/View";
import Edit from "./components/Edit";
import { PrivateRoute } from "./PrivateRoute";

export default class App extends Component {
  check = () => {
    if (localStorage.token) {
      return true;
    }
    return false;
  };
  render() {
    return (
      <Router>
        <>
          <Route
            exact
            path="/"
            render={() => (this.check() ? <Redirect to="/view" /> : <Login />)}
          />
          <Switch>
            <PrivateRoute exact path="/add" component={Add} />
            <PrivateRoute exact path="/view" component={View} />
            <PrivateRoute exact path="/edit/:id" component={Edit} />
          </Switch>
        </>
      </Router>
    );
  }
}
