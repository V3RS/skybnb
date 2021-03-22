import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";

import "./LoginModal.css";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-container">
      <div id="login-title">Log in</div>
      <form onSubmit={onLogin}>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
            className="login-inputs"
            required
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            id="login-pw-input"
            className="login-inputs"
            required
          />
          <button type="submit" className="loginFormBtns">
            Log in
          </button>
        </div>
        <div className="login-or">
          <div className="before-or"></div>
          <div>or</div>
          <div className="after-or"></div>
        </div>
        <button className="loginFormBtns">Demo Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
