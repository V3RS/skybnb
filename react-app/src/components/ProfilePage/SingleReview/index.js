import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./SingleBooking.css";

export default function SingleReview({ review }) {
  const history = useHistory();
  const handleSpotsPageRedirect = (spot_id) => {
    history.push(`/spots/${spot_id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="singlereview__container">
      <div
        className="singlereview-image__container"
        onClick={() => {
          handleSpotsPageRedirect(review.spot.id);
        }}
      >
        <img src={review.spot.pictures[0]} />
      </div>
      <div
        className="singlereview-info__container"
        onClick={() => {
          handleSpotsPageRedirect(review.spot.id);
        }}
      >
        <div className="singlereview-title">{review.spot.title}</div>
        <div className="singlereview-daterange__container">
          {review.comment}
        </div>
      </div>
    </div>
  );
}
