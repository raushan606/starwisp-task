import React from "react";
// import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Add from "./components/Add";
import View from "./components/View";

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
      </>
    </Router>
  );
}

export default App;
