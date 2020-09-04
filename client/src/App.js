import React, { Component } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/add" component={Add} />
            <PrivateRoute exact path="/view" component={View} />
            <PrivateRoute exact path="/edit/:id" component={Edit} />
          </Switch>
        </>
      </Router>
    );
  }
}
