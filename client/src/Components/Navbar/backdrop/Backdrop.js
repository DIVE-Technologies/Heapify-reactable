import React from "react";

const backdrop = (props) => <div style={styles} onClick={props.click} />;

const styles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.4)",
  zIndex: 1,
};
export default backdrop;
