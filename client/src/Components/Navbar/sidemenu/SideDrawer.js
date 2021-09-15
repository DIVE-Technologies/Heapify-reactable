import React from "react";
import "./SideDrawer.css";

const sideDrawer = (props) => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }

  return (
    <nav className={drawerClasses.join(" ")}>
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
          <a href="/music">Login</a>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
