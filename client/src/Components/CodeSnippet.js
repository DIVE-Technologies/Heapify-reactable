import React from "react";
import PropTypes from "prop-types";

const CodeSnippet = (props) => {
  return (
    <div className="mb-3">
      <code>{props.children}</code>
    </div>
  );
};

CodeSnippet.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CodeSnippet;
