import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import ResetPassword from "../pages/ResetPassword/resetPassword";
export default function Routes({ location }) {
  return (
    <Router history={history} location={location}>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/resetPassword" component={ResetPassword} />
      </Switch>
    </Router>
  );
}
