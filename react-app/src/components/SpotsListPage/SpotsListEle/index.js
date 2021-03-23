import React from "react";
import "./SpotsListEle.css";

export default function SpotsListEle({
  img,
  location_desc,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="spotslistele">
      <img src={img} alt="" />
      <i class="far fa-heart"></i>

      <div className="spotslistele-info-container">
        <div className="spotslistele-info-top">
          <span>{location_desc}</span>
          <h3>{title}</h3>
          <div className="info-top-line"></div>
          <p>{description}</p>
        </div>

        <div className="spotslistele-info-bot">
          <i class="fas fa-star">{star}</i>
          <div className="spotslistele-price-div">
            <div>${price}/ night</div>
            <div>${total} total</div>
          </div>
        </div>
      </div>
    </div>
  );
}
