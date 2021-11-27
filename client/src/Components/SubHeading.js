import React from "react";
import PropTypes from "prop-types";

const SubHeading = (props) => {
  return <h5>{props.title}</h5>;
};

SubHeading.propTypes = {
  title: PropTypes.string,
};

SubHeading.defaultProps = {
  title: "",
};

export default SubHeading;
