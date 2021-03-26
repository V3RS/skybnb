import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openSignup } from "../../store/modal.js";

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);


  return (
    <div>
      <div className="landing-page">
        <img
          alt=""
          src="https://media.wired.com/photos/5a7e4460a6da8f4f535ce2ef/191:100/w_1910,h_1000,c_limit/SW1.jpg"
        />
      </div>
      <div className="landing-text">
        <h2>Made possible by Hosts</h2>
      </div>

      <div className="ammenities__container">
        <h2>Live anywhere</h2>
        <div className="ammenities__images">
          <div className="single__ammenity">
            <img
              alt=""
              src="https://pm1.narvii.com/6041/880e894abc46342473f11838a65ee9571a0f5c27_hq.jpg"
            />
            <h4>Temples</h4>
          </div>
          <div className="single__ammenity">
            <img
              alt=""
              src="https://www.denofgeek.com/wp-content/uploads/2016/01/millennium-falcon.jpg"
            />
            <h4>Space ships</h4>
          </div>
          <div className="single__ammenity">
            <img
              alt=""
              src="https://d3eys52k95jjdh.cloudfront.net/wp-content/uploads/2019/07/cropped-He_Tatooine_21.jpg"
            />
            <h4>Desert igloos</h4>
          </div>
          <div className="single__ammenity">
            <img
              alt=""
              src="https://api.time.com/wp-content/uploads/2019/12/cute-star-wars-characters-07.jpg"
            />
            <h4>Pets allowed</h4>
          </div>
        </div>
      </div>
      <div className="hostsharing__container">
        <img alt="" src="https://wallpaperaccess.com/full/2184823.jpg" />
        <div className="hostsharing__text__container">
          <h1>Your planet is worth sharing</h1>
          <h4>
            Turn your extra <span className="space">space</span> into your next{" "}
            <span className="opportunity">opportunity.</span>
          </h4>
          <button
            onClick={() => {
              if (session.id) {
                history.push("/createspot");
                window.scrollTo(0, 0);
              } else dispatch(openSignup());
            }}
          >
            Become a Host
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
