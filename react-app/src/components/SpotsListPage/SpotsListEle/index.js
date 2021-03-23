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
      <div className="spotslistele-info-top">
        <p>{location_desc}</p>
        <h3>{title}</h3>
        <p>______</p>
        <p>{description}</p>
      </div>
      <div className="spotslistele-info-bot">
        <i class="fas fa-star">{star}</i>
        <div className="spotslistele-price-div">
          <p>${price}/ night</p>
          <p>${total} total</p>
        </div>
      </div>
    </div>
  );
}
