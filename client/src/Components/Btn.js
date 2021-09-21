import React from "react";
import { Button } from "react-bootstrap";
import styles from "./styles.module.css";

const Btn = (props) => {
  // const styles = {
  //   width: props.width ? props.width : 130,
  // };

  return props.loading ? (
    <Button
      variant={props.variant}
      onClick={props.onClick}
      className={styles.btn}
    >
      <i className={`${styles.loadingbtn} fas fa-spinner`} />
    </Button>
  ) : (
    <Button
      variant={props.variant}
      onClick={props.onClick}
      className={styles.btn}
    >
      {props.title}
    </Button>
  );
};

export default Btn;
