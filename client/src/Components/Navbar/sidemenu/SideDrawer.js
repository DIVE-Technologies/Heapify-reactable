import React from "react";
import "./SideDrawer.css";
import { checkAuth } from "../../../Utils/checkAuth";
import { useHistory } from "react-router-dom";

const SideDrawer = (props) => {
  const history = useHistory();
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }

  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
          <div href="/">About</div>
        </li>
        <li>
          <div href="/user">Features</div>
        </li>
        <li>
          <div href="/music">Programs</div>
        </li>
        <li>
          <div href="/music">Contact Us</div>
        </li>
        <li>
          {!checkAuth() ? (
            <div onClick={() => history.push("/login")}>Login</div>
          ) : (
            <div onClick={() => history.push("/dashboard")}>Resources</div>
          )}{" "}
        </li>
      </ul>
    </nav>
  );
};
export default SideDrawer;
