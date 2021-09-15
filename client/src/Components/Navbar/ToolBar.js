import React from "react";
import SideMenu from "./sidemenu/SideMenu";
import "./ToolBar.css";
import Logo from "../../Assets/Images/Logo.png";
import Btn from "../Btn";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigator">
      <div />
      <div className="toolbar_logo">
        <a href="/">
          <img src={Logo} alt="Logo" height="50" width="50" />
        </a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/user">Features</a>
          </li>
          <li>
            <a href="/music">Programs</a>
          </li>
          <li>
            <a href="/music">Contact Us</a>
          </li>
          <li>
            <Btn
              // onClick={handleLogin}
              // loading={isLoading}
              title="Login"
            />
            {/* <a href="/music">Login</a> */}
          </li>{" "}
          {/* will be made as a btn */}
        </ul>
      </div>
      <div className="toggle-btn">
        <SideMenu click={props.drawerToggleClickHandler} />
      </div>
    </nav>
  </header>
);

export default toolbar;
