import React from "react";
import Login from "../Pages/Login";
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactAbleWee2 from "../Pages/React-Able/Week2";
import Home from "../Pages/Dashboard";
import { getLocalData } from "../Utils/LocalStorage";
import HomePage from '../Pages/Home/HomePage';

const Routers = () => {
  const checkAuth = () => {
    const name = getLocalData("heapifyUser");
    
    if (name !== null) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <HashRouter>
      <Switch>
        {/* <Route exact path='/home' component={HomePage} /> */}
        <Route
          exact
          path="/login"
          render={() => {
            if (!checkAuth()) return <Route component={Login} />;
            else return <Redirect to="/dashboard" />;
          }}
        />
        <Route exact path="/login" component={Login} />;
        <Route
          exact
          path="/dashboard"
          render={() => {
            if (checkAuth()) return <Route component={Home} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Route
          exact
          path="/react-able/week2"
          render={() => {
            if (checkAuth()) return <Route component={ReactAbleWee2} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Redirect to="/login" />
      </Switch>
    </HashRouter>
  );
};

export default Routers;
