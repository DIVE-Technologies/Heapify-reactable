import React from "react";
import { FormControl, FloatingLabel, Form } from "react-bootstrap";

const Input = (props) => {
  return props.textarea ? (
    <div>
      <Form.Label>{props.title}</Form.Label>
      <FloatingLabel label={props.placeholder}>
      <Form.Control
        as="textarea"
        style={{ height: props.height, backgroundColor: '#f1f2f3', border: 0 }}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      />
    </FloatingLabel>
    </div>
  ) : (
    <Form.Group className="mb-3">
      <Form.Label>{props.title}</Form.Label>
      <FormControl
        type={props.type}
        style={{ backgroundColor: '#f1f2f3', border: 0, height: props.height }}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </Form.Group>
  );
};

export default Input;
