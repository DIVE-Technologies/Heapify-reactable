import React from "react";
import PropTypes from "prop-types";

const Content = (props) => {
  return <p>{props.children}</p>;
};

Content.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Content;
