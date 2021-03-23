import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import { closeLogin, openSignup } from "../../store/modal.js";
import { useDispatch } from "react-redux";

import "./LoginModal.css";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const onDemoLogin = async () => {
    const demoUser = await login("demo@aa.io", "password");
    if (!demoUser.errors) {
      setAuthenticated(true);
    } else {
      setErrors(demoUser.errors);
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

  const closeModal = () => dispatch(closeLogin());

  const onSwitch = () => {
    dispatch(closeLogin());
    dispatch(openSignup());
  };

  return (
    <div className="login-container">
      <button className="close__modal" onClick={closeModal}>
        <i class="fas fa-times"></i>
      </button>
      <div id="login-title">Log in</div>
      <form onSubmit={onLogin}>
        <div>
          <div className="login-input-container">
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
              className="login-inputs"
              required
            />
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
            </div>
          </div>
          <button type="submit" className="loginFormBtns">
            Log in
          </button>
        </div>
        <div className="login-or">
          <div className="before-or"></div>
          <div>or</div>
          <div className="after-or"></div>
        </div>
      </form>
      <button className="loginFormBtns" id="demoBtn" onClick={onDemoLogin}>
        Demo Log in
      </button>
      <div className="login__switch">
        Don’t have an account?
        <button onClick={onSwitch} className="login_switch_btn">
          Sign up
        </button>
      </div>
      <div>
        {errors.map((error) => (
          <div key={error} className="login__errors">
            {error}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginForm;
