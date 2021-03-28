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
  console.log("REVIEW", review);
  return (
    <div className="singlebooking__container">
      <div
        className="singlebooking-image__container"
        onClick={() => {
          handleSpotsPageRedirect(review && review.spot && review.spot.id);
        }}
      >
        <img src={review && review.spot && review.spot.pictures[0]} />
      </div>
      <div
        className="singlebooking-info__container"
        onClick={() => {
          handleSpotsPageRedirect(review && review.spot && review.spot.id);
        }}
      >
        <div className="singlebooking-title">
          {review && review.spot && review.spot.title}
        </div>
        <div className="singlebooking-daterange__container">
          {review && review.spot && review.comment}
        </div>
      </div>
    </div>
  );
}
