import React, { useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Input from "../Components/Input";
import PageHeading from "../Components/PageHeading";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = () => {
    const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return !expression.test(email);
  };

  const validate = () => {
    setError("");
    if (!email) {
      setError("Email is required");
      return false;
    } else if (!password) {
      setError("Password is required");
      return false;
    } else if (validateEmail()) {
      setError("Invalid Email");
      return false;
    } else {
      return true;
    }
  };

  const handleLogin = async () => {
    if (validate()) {
      let data = { email, password };
      setLoading(true);

      let result = await fetch(
        `https://heapify-reactable.herokuapp.com/api/users/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (result.status === 200 || result.status === 201) {
        result = await result.json();
        localStorage.setItem("name", result.name);
        setLoading(false);
        history.push("/home");
        return result;
      } else {
        result = await result.json();
        setLoading(false);
        setError(result.msg);
        return result;
      }
    }
  };

  return (
    <div>
      <PageHeading>Heapify React Able</PageHeading>
      <Container className="pageSection d-flex justify-content-center align-items-center">
        <Card style={{ width: "31rem" }} className="shadow-lg">
          <Card.Body>
            <Card.Title className="text-center">Login</Card.Title>
            <form type="submit" onSubmit={handleLogin} className="text-center">
              <Input
                title="Email"
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Input
                title="Password"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {error ? (
                <div
                  className="text-danger mb-4 p-2 border border-danger"
                  style={{ backgroundColor: "#fae8e8" }}
                >
                  {error}
                </div>
              ) : null}
              {/* <div className="d-grid gap-2"> */}
              <Button
                style={{
                  width: 100,
                  // borderRadius: 5,
                  // backgroundColor: "#00f8ff",
                  // border: "#00f8ff",
                  // color: "black",
                }}
                variant="primary"
                onClick={handleLogin}
              >
                {loading ? "Signing In ...." : "Login"}
              </Button>
              {/* </div> */}
            </form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
