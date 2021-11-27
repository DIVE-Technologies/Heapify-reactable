import React from "react";
import "./AuthRedirect.css";
import { useHistory } from "react-router-dom";
const AuthRedirect = (props) => {
  const history = useHistory();
  var msg = props.msg;
  var highlight = props.title;
  var push = props.redirect;

  return (
    <div align="center">
      {msg} &nbsp;
      <span
        onClick={() => {
          history.push(`/${push}`);
        }}
        className="link-primary"
      >
        {highlight}
      </span>
    </div>
  );
};

export default AuthRedirect;
