import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <InputGroup className="mt-4 mb-4">
      <InputGroup.Text>{props.title}</InputGroup.Text>
      <FormControl
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </InputGroup>
  );
};

Input.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.node,
};

Input.defaultProps = {
  title: "",
  type: "text",
  placeholder: "",
};

export default Input;
