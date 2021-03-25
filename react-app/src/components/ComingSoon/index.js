import React from "react";
import { useHistory } from "react-router-dom";

import "./ComingSoon.css";
import bg from "./bg.jpg";

export default function CommingSoon() {
  const history = useHistory();

  return (
    <div className="coming__soon__container">
      <img src={bg} />
      <div className="cs__title">Coming soon...</div>
      <button id="go__back" onClick={() => history.push("/")}>
        Go Back Home
      </button>
    </div>
  );
}
