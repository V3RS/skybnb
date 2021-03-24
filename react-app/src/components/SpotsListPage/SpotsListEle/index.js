import React from "react";
import "./SpotsListEle.css";
import { useHistory } from "react-router-dom";

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
  const handleSpotsPageRedirect = (spot_id) => {
    history.push(`/spots/${spot_id}`);
  };
  return (
    <div className="spotslistele" onClick={() => handleSpotsPageRedirect(id)}>
      <img src={img} alt="" />
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
            <div>${price}/ night</div>
            <div>${total} total</div>
          </div>
        </div>
      </div>
    </div>
  );
}
