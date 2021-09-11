import React, { useEffect } from "react";
import "./App.css";
import Login from "./Pages/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactAbleWee2 from "./Pages/React-Able/Week2";
import Home from "./Pages/Home";

function App() {
  // useEffect(() => {
  //   document.addEventListener("contextmenu", (e) => {
  //     e.preventDefault();
  //   });

  //   document.addEventListener("keydown", (event) => {
  //     if (
  //       event.ctrlKey === true ||
  //       event.which === "118" ||
  //       event.which === "86"
  //     ) {
  //       event.preventDefault();
  //     }
  //   });
  // }, []);

  const checkAuth = () => {
    const name = localStorage.getItem("name");
    if (name !== null) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />;
        <Route
          exact
          path="/home"
          render={() => {
            if (checkAuth()) return <Route component={Home} />;
            else return <Redirect to="/" />;
          }}
        />
        <Route
          exact
          path="/react-able/week2"
          render={() => {
            if (checkAuth()) return <Route component={ReactAbleWee2} />;
            else return <Redirect to="/" />;
          }}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
