import React, { useState } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
    btnValue: "Log In",
  });

  const history = useHistory();

  async function Login() {
    let item = { email: state.email, password: state.password };
    setState({
      ...state,
      btnValue: "Signing In...",
    });

    let result = await fetch(
      `https://heapify-reactable.herokuapp.com/api/users/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    result = await result;
    if (result.status === 200 || result.status === 201) {
      result = await result.json();
      localStorage.setItem("name", result.name);
      history.push("/home");
      return result;
    } else if (result.status === 401 || result.status === 500) {
      result = await result.json();
      alert(result.msg);
      setState({
        btnValue: "Log In",
      });
      return result;
    }
  }

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 style={{ fontSize: "25px", color: "#ffffff" }}>
          Heapify React Able
        </h1>
        <div className="login">
          <form>
            <label
              style={{ fontSize: "20px", marginLeft: "15px", color: "#ffffff" }}
            >
              Email Address
            </label>
            <br />
            <input
              type="email"
              className="fields"
              name="email"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              required
            />
            <br />

            <label
              style={{ fontSize: "20px", marginLeft: "15px", color: "#ffffff" }}
            >
              Password
            </label>
            <br />
            <input
              type="password"
              className="fields"
              value={state.password}
              onChange={(e) => setState({ ...state, password: e.target.value })}
              name="password"
              required
            />
          </form>
          <div className="login-button">
            <button onClick={Login}>{state.btnValue}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
