import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signUp } from "../../services/auth";
import { openLogin, closeSignup } from "../../store/modal.js";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

import "./SignupModal.css";

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        dispatch(sessionActions.loginUser({ email, password }));
        dispatch(closeSignup());
        setAuthenticated(true);
      }
    }
  };

  const onDemoLogin = async () => {
    setAuthenticated(true);
    dispatch(closeSignup());
    await dispatch(sessionActions.demoLoginUser());
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const closeModal = () => dispatch(closeSignup());

  const onSwitch = () => {
    closeModal();
    dispatch(openLogin());
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signup-container">
      <button className="close__modal__signup" onClick={closeModal}>
        <i className="fas fa-times"></i>
      </button>
      <div id="signup-title">Sign Up</div>
      <form onSubmit={onSignUp}>
        <div className="signup-inputs-container">
          <div>
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
              placeholder="User Name"
              className="signup-inputs"
              required
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
              placeholder="Email"
              className="signup-inputs"
              required
            ></input>
          </div>
          <div>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
              placeholder="Password"
              className="signup-inputs"
              required
            ></input>
          </div>
          <div>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              placeholder="Confirm Password"
              className="signup-inputs"
            ></input>
          </div>
        </div>
        <button className="signupFormBtns" type="submit">
          Sign Up
        </button>
        <div className="signup-or">
          <div className="before-or"></div>
          <div>or</div>
          <div className="after-or"></div>
        </div>
      </form>
      <button className="signupFormBtns" id="demoBtn" onClick={onDemoLogin}>
        Demo Log in
      </button>
      <div className="signup__switch">
        Already have an account?
        <button onClick={onSwitch} className="signup_switch_btn">
          Log in
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
