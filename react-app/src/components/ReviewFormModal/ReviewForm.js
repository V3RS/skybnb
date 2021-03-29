import React, { useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeReviewForm } from "../../store/modal.js";
import { postReview } from "../../services/spot";

import "./ReviewForm.css";

export default function ReviewForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const closeModal = () => dispatch(closeReviewForm());
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const session = useSelector((state) => state.session);
  const { spotId } = useParams();

  const updateComment = (e) => {
    setComment(e.target.value);
  };
  const updateRating = (e) => {
    setRating(e.target.value);
  };

  const onRev = async (e) => {
    await postReview(comment, rating, spotId, session.id);
  };

  return (
    <div className="review__form__container">
      <div id="close__rev__form">
        <button className="close__modal" onClick={closeModal}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div id="rev-form-title">Add a review</div>
      <div id="rev__form__container">
        <form onSubmit={onRev}>
          <div>
            <div className="input__rev__container">
              <textarea
                name="comment"
                type="textarea"
                placeholder="Write your review here..."
                value={comment}
                onChange={updateComment}
                className="rev__input"
                required
              ></textarea>
            </div>
            <div className="input__rating__container">
              <input
                type="radio"
                name="rating"
                value={1}
                onChange={updateRating}
                className="star"
              />
              <label className="star__label">
                1 <i className="star__rev__form" className="fas fa-star"></i>
              </label>
              <input
                type="radio"
                name="rating"
                value={2}
                onChange={updateRating}
                className="star"
              />
              <label className="star__label">
                2 <i className="star__rev__form" className="fas fa-star"></i>
              </label>
              <input
                type="radio"
                name="rating"
                value={3}
                onChange={updateRating}
                className="star"
              />
              <label className="star__label">
                3 <i className="star__rev__form" className="fas fa-star"></i>
              </label>
              <input
                type="radio"
                name="rating"
                value={4}
                onChange={updateRating}
                className="star"
              />
              <label className="star__label">
                4 <i className="star__rev__form" className="fas fa-star"></i>
              </label>
              <input
                type="radio"
                name="rating"
                value={5}
                onChange={updateRating}
                className="star"
                required
              />
              <label className="star__label">
                5 <i className="star__rev__form" className="fas fa-star"></i>
              </label>
            </div>
            <button type="submit" className="rev__sub__btn">
              Add a review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
