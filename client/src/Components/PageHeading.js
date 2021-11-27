import React from "react";
import Logo from "../Assets/Images/Logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const PageHeading = (props) => {
  // const history = useHistory();
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   setUser(getLocalData("heapifyUser"));
  // }, []);

  // const handleLogout = () => {
  //   clearLocalData();

  //   history.push("/login");
  // };

  return (
    <Navbar className="fixed-top pageHeading text-light">
      <Container className="d-flex justify-content-between">
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

PageHeading.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageHeading;
