import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { closeComingSoon } from "../../store/modal";

import "./ComingSoon.css";

export default function CommingSoon() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="coming__soon__container_modal">
      <img
        className="coming-soon_modal"
        src="https://skybnb.s3.amazonaws.com/comingsoon3.jpg"
        alt="Coming Soon"
      />
      <button
        className="close__modal__comingsoon"
        onClick={() => dispatch(closeComingSoon())}
      >
        <i className="fas fa-times"></i>
      </button>
      <div className="cs__title_modal">Coming soon...</div>
      <button id="go__back_modal" onClick={() => history.push("/")}>
        Go Back Home
      </button>
    </div>
  );
}
