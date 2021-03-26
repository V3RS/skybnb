import React from "react";
import "./SpotsListEle.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openPictureSlider } from "../../../store/modal.js";

export default function SpotsListEle({
  id,
  img,
  location_desc,
  title,
  description,
  star,
  price,
  total,
}) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openSlider = () => dispatch(openPictureSlider());

  const handleSpotsPageRedirect = (spot_id) => {
    history.push(`/spots/${spot_id}`);
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="spotslistele"
      onClick={(e) => {
        if (e.target.tagName.toLowerCase() === "img") return;
        handleSpotsPageRedirect(id);
      }}
    >
      <img src={img} alt="" onClick={openSlider} />
      <i className="far fa-heart"></i>

      <div className="spotslistele-info-container">
        <div className="spotslistele-info-top">
          <span>{location_desc}</span>
          <h3>{title}</h3>
          <div className="info-top-line"></div>
          <p>{description}</p>
        </div>

        <div className="spotslistele-info-bot">
          <i className="fas fa-star">{star}</i>
          <div className="spotslistele-price-div">
            <div className="spotslistele-price">
              <strong>${price}</strong> / night
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
