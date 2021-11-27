import React from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

const Image = (props) => {
  return (
    <Container className="text-center mt-3 mb-3">
      <img src={props.src} alt={props.alt} />
    </Container>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  src: "",
  alt: "",
};

export default Image;
