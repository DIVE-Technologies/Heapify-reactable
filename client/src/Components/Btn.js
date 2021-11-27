import React from "react";
import { Button } from "react-bootstrap";
import "./styles.css";
import PropTypes from "prop-types";

const Btn = (props) => {
  return props.loading ? (
    <Button
      style={{
        width: props.width,
      }}
      variant={props.variant}
      onClick={props.onClick}
    >
      <i className="fas fa-spinner loadingbtn" />
    </Button>
  ) : (
    <Button
      style={{
        width: 130,
      }}
      variant={props.variant}
      onClick={props.onClick}
    >
      {props.title}
    </Button>
  );
};

Btn.propTypes = {
  loading: PropTypes.bool,
  width: PropTypes.number,
  variant: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

Btn.defaltProps = {
  loading: false,
  width: 130,
  variant: "primary",
};

export default Btn;
