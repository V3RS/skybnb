import React from "react";
import { useHistory } from "react-router-dom";

import "./ComingSoon.css";

export default function CommingSoon() {
  const history = useHistory();

  return (
    <div className="coming__soon__container">
      <img className='coming-soon' src='https://skybnb.s3.amazonaws.com/comingsoon3.jpg' alt="Coming Soon"/>
      <div className="cs__title">Coming soon...</div>
      <button id="go__back" onClick={() => history.push("/")}>
        Go Back Home
      </button>
    </div>
  );
}
