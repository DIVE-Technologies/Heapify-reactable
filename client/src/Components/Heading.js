import React from "react";
import PropTypes from "prop-types";

const Heading = (props) => {
  return <h3>{props.title}</h3>;
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
