import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Btn from "../Components/Btn";
import Input from "../Components/Input";
import PageHeading from "../Components/PageHeading";
import { setLocalData } from "../Utils/LocalStorage";
import { authUrl } from "../config/baseUrl";
import AuthRedirect from "../Components/AuthRedirect";
import { validateEmail, validatePhone } from "../Utils/Validation.js";

const Signup = () => {
  const history = useHistory();
  const [contactNumber, setContact] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const validate = () => {
    setError("");
    if (!name) {
      setError("Please enter your name");
    } else if (!email) {
      setError("Email is required");
      return false;
    } else if (validateEmail(email)) {
      setError("Invalid Email");
      return false;
    } else if (!password) {
      setError("Password is required");
      return false;
    } else if (confirmPassword === "") {
      setError(" Please confirm your password");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else if (validatePhone(contactNumber)) {
      setError("Invalid Contact Number");
    } else {
      return true;
    }
  };

  const handleSignup = async () => {
    if (validate()) {
      let data = { name, confirmPassword, email, password, contactNumber };
      setLoading(true);

      let result = await fetch(`${authUrl}/signup`, {
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
            <Card.Title className="text-center">Sign up</Card.Title>
            <form type="submit" onSubmit={handleSignup} className="text-center">
              <Input
                title="Name"
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
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
                placeholder="Set your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Input
                title="Confirm Password"
                type="password"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              <Input
                title="Contact No."
                type="tel"
                placeholder="Enter your contact number"
                onChange={(e) => setContact(e.target.value)}
                value={contactNumber}
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
                onClick={handleSignup}
                loading={isLoading}
                title="Register"
              />
            </form>
            <AuthRedirect
              msg="Already have an account?"
              title="Login"
              redirect="login"
            />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Signup;
