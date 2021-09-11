import React from "react";
import Logo from "../Assets/Images/Logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";

const PageHeading = (props) => {
  return (
    <Navbar bg="light" expand="lg" className='fixed-top'>
      <Container>
        <Navbar.Brand>
          <img src={Logo} alt="Logo" height="50" width="50" />
        </Navbar.Brand>
        <Nav className="mx-auto">
          <h1>{props.children}</h1>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default PageHeading;
