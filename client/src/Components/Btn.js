import React from "react";
import { Button } from "react-bootstrap";
import "./styles.css";

const Btn = (props) => {
  const styles = {
    width: props.width ? props.width : 130,
  };

  return props.loading ? (
    <Button style={styles} variant={props.variant} onClick={props.onClick}>
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

export default Btn;
