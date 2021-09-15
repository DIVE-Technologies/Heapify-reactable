import React from "react";
import Login from "../Pages/Login";
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Basics from "../Pages/React-Able-Notes/Basics";
import Home from "../Pages/Dashboard";
import { getLocalData } from "../Utils/LocalStorage";
import HomePage from '../Pages/Home/HomePage';
import JSX from "../Pages/React-Able-Notes/JSX";
import StateProps from "../Pages/React-Able-Notes/State-Props";
import ElementsComponents from "../Pages/React-Able-Notes/ElementsComponents";

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
          path="/react-able/basics"
          render={() => {
            if (checkAuth()) return <Route component={Basics} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Route
          exact
          path="/react-able/elements-components"
          render={() => {
            if (checkAuth()) return <Route component={ElementsComponents} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Route
          exact
          path="/react-able/JSX"
          render={() => {
            if (checkAuth()) return <Route component={JSX} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Route 
        exact
        path="/react-able/State-Props"
        render={() => {
          if (checkAuth()) return <Route component={StateProps} />;
          else return <Redirect to="/login" />;
        }}
        />
        <Redirect to="/login" />
      </Switch>
    </HashRouter>
  );
};

export default Routers;
