import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Btn from "../Components/Btn";
import Input from "../Components/Input";
import PageHeading from "../Components/PageHeading";
import { setLocalData } from "../Utils/LocalStorage";
import { authUrl } from "../config/baseUrl";
import AuthRedirect from "../Components/AuthRedirect";
import { validateEmail } from "../Utils/Validation";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const validate = () => {
    setError("");
    if (!email) {
      setError("Email is required");
      return false;
    } else if (!password) {
      setError("Password is required");
      return false;
    } else if (validateEmail(email)) {
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

      let result = await fetch(`${authUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (result.status === 200 || result.status === 201) {
        result = await result.json();
        const user = {
          name: result.name,
          email: result.email,
          role: result.role,
        };
        setLocalData("heapifyUser", user);

        setLoading(false);
        history.push("/dashboard");
        return result;
      } else {
        result = await result.json();
        setLoading(false);
        setError(result.message);
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
              <Btn
                variant="primary"
                onClick={handleLogin}
                loading={isLoading}
                title="Login"
              />
            </form>
            <AuthRedirect
              msg="Don't have an account?"
              title="Sign up"
              redirect="signup"
            />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
