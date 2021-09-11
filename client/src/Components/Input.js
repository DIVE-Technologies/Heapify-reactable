import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

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

export default Input;
