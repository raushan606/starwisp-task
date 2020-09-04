import React from "react";
// import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Add from "./components/Add";
import View from "./components/View";
import AuthService from "./services/auth.service";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Login} />
        <section>
          <Switch>
            <Route exact path="/add" component={Add} />
            <Route exact path="/view" component={View} />
          </Switch>
        </section>
        {console.log(AuthService.getCurrentUser())}
      </>
    </Router>
  );
}

export default App;
