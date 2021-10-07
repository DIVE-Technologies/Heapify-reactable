import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";
import Routers from "./Routers/Routers";

import ReactGA from 'react-ga';

ReactGA.initialize('G-Q4RP4T25HE');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    document.addEventListener("keydown", (event) => {
      if (
        event.ctrlKey === true ||
        event.which === "118" ||
        event.which === "86"
      ) {
        event.preventDefault();
      }
    });
  }, []);

  return (
    <HashRouter>
      <div className="App">
        <Routers />
      </div>
    </HashRouter>
  );
}

export default App;
