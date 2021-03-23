import React from "react";
import "./SpotsList.css";

export default function SpotsList({
  img,
  location_desc,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="spotslist">
      <img src={img} alt="" />
      <i class="far fa-heart"></i>
      <div className="spotslist-info-top">
        <p>{location_desc}</p>
        <h3>{title}</h3>
        <p>______</p>
        <p>{description}</p>
      </div>
      <div className="spotslist-info-bot">
        <i class="fas fa-star">{star}</i>
        <div className="spotslist-price-div">
          <p>${price}/ night</p>
          <p>${total} total</p>
        </div>
      </div>
    </div>
  );
}
