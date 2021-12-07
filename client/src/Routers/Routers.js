import React from "react";
import Login from "../Pages/Login";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Basics from "../Pages/React-Able-Notes/Basics";
import Home from "../Pages/Dashboard";
import HomePage from "../Pages/Home/HomePage";
import JSX from "../Pages/React-Able-Notes/JSX";
import StateProps from "../Pages/React-Able-Notes/State-Props";
import ElementsComponents from "../Pages/React-Able-Notes/ElementsComponents";
import Styles from "../Pages/React-Able-Notes/Styles";
import DOM from "../Pages/React-Able-Notes/DOM";
import LifecycleMethods from "../Pages/React-Able-Notes/LifecycleMethods";
import Hooks from "../Pages/React-Able-Notes/Hooks";
import NpmArrayMethods from "../Pages/React-Able-Notes/NpmArrayMethods";
import EventHandling from "../Pages/React-Able-Notes/EventHandling";
import ContextAPI from "../Pages/React-Able-Notes/ConextAPI";
import ReactRouter from "../Pages/React-Able-Notes/ReactRouter";
import API from "../Pages/React-Able-Notes/API";
import Signup from "../Pages/Signup";
import { checkAuth } from "../Utils/Validation";
import { ReactRoleFlag } from "../Utils/RoleValidate";

const Routers = () => {
  const redirectToUrl = (url) => {
    window.location.href = url;
    return null;
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
        <Route
          exact
          path="/signup"
          render={() => {
            if (!checkAuth()) return <Route component={Signup} />;
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
          path="/ReactAble/basics"
          render={() => {
            if (checkAuth() && ReactRoleFlag())
              return <Route component={Basics} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Route
          exact
          path="/ReactAble/elements-components"
          render={() => {
            if (checkAuth() && ReactRoleFlag())
              return <Route component={ElementsComponents} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Route
          exact
          path="/ReactAble/JSX"
          render={() => {
            if (checkAuth() && ReactRoleFlag())
              return <Route component={JSX} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Route
          exact
          path="/ReactAble/state-props"
          render={() => {
            if (checkAuth() && ReactRoleFlag())
              return <Route component={StateProps} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Route
          exact
          path="/ReactAble/Styles"
          render={() => {
            if (checkAuth() && ReactRoleFlag())
              return <Route component={Styles} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Route
          exact
          path="/ReactAble/DOM"
          render={() => {
            if (checkAuth() && ReactRoleFlag())
              return <Route component={DOM} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Route
          exact
          path="/ReactAble/lifecycle-methods"
          render={() => {
            if (checkAuth() && ReactRoleFlag())
              return <Route component={LifecycleMethods} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Route
          exact
          path="/ReactAble/hooks"
          render={() => {
            if (checkAuth() && ReactRoleFlag())
              return <Route component={Hooks} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Route
          exact
          path="/ReactAble/npm-array-methods"
          render={() => {
            if (checkAuth() && ReactRoleFlag())
              return <Route component={NpmArrayMethods} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Route
          exact
          path="/ReactAble/event-handling"
          render={() => {
            if (checkAuth() && ReactRoleFlag())
              return <Route component={EventHandling} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Route
          exact
          path="/ReactAble/context-API"
          render={() => {
            if (checkAuth() && ReactRoleFlag())
              return <Route component={ContextAPI} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Route
          exact
          path="/ReactAble/react-router"
          render={() => {
            if (checkAuth() && ReactRoleFlag())
              return <Route component={ReactRouter} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Route
          exact
          path="/prep-check"
          component={() =>
            redirectToUrl(
              "https://docs.google.com/forms/d/e/1FAIpQLSezgw43DjSYP3RjS2jSExXpsFhJwjS_ioONuKBO8BwdS7lXGQ/viewform?usp=sf_link"
            )
          }
        />
        <Route
          exact
          path="/react-able"
          component={() =>
            redirectToUrl(
              "https://docs.google.com/forms/d/e/1FAIpQLSfXyzjPI9ZKfdkuGUiMRJPTRSlTorH5RvVyV-H45k1n-Fn9Ww/viewform?usp=sf_link"
            )
          }
        />
        <Route
          exact
          path="/ReactAble/API"
          render={() => {
            if (checkAuth() && ReactRoleFlag())
              return <Route component={API} />;
            else return <Redirect to="/login" />;
          }}
        />
        <Redirect to="/login" />
      </Switch>
    </HashRouter>
  );
};

export default Routers;
