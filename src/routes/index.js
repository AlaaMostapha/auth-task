import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}
