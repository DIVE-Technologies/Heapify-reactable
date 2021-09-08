import React from 'react';
import './App.css';
import Login from "./login/Login";
import Content from "./content/content";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


function App() {

  const checkAuth = () => {
    const name = localStorage.getItem('name');
    if (name !== null) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />;
        <Route exact path="/home" render={() => {
          if (checkAuth()) return <Route component={Content} />;
          else return <Redirect to="/" />;
        }} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
