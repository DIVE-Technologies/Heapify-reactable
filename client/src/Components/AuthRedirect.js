import React from "react";
import { useHistory } from "react-router-dom";
const AuthRedirect = (props) => {
  const history = useHistory();
  var msg = props.msg;
  var highlight = props.title;
  var push = props.redirect;
  return (
    <p align="center" style={{ position: "relative", top: "10px" }}>
      <span>
        {msg} &nbsp;
        <span
          onMouseOver={(e) => {
            var link = e.target;
            link.style.textDecoration = "underline";
            link.style.cursor = "pointer";
          }}
          onMouseOut={(e) => {
            var link = e.target;
            link.style.textDecoration = "none";
            link.style.cursor = "auto";
          }}
          onClick={() => {
            history.push(`/${push}`);
          }}
          className="link-primary"
        >
          {highlight}
        </span>
      </span>
    </p>
  );
};

export default AuthRedirect;
