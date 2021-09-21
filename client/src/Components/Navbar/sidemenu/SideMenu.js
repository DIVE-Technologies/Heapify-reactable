import React from "react";
import "./SideMenu.css";
import { useHistory } from "react-router-dom";
import { checkAuth } from "../../../Utils/checkAuth";
import Btn from "../../Btn";

const MenuToggleButton = (props) => {
  const history = useHistory();

  return !checkAuth() ? (
    <Btn title="Login" onClick={() => history.push("/login")} />
  ) : (
    <Btn
      title="Resources"
      onClick={() => history.push("/dashboard")}
    />
  )
  // <button className="toggle-button" onClick={props.click}>
  //   <div className="toggle-button-line" />
  //   <div className="toggle-button-line" />
  //   <div className="toggle-button-line" />
  // </button>
  };

export default MenuToggleButton;
