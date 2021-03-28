import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Reviews.css";
import { useDispatch } from "react-redux";
import { closeReviews } from "../../store/modal";

export default function Reviews({ reviews, rating, reviews_count }) {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="reviews__modal__container">
      <button
        className="close__modal__reviews"
        onClick={() => dispatch(closeReviews())}
      >
        <i className="fas fa-times"></i>
      </button>
      <div className="rev__search__container">
        <i id="search__icon__rev" class="fas fa-search"></i>
        <input className="rev__search" placeholder="Search reviews"></input>
      </div>
      <div id="reviews__container__modal">
        <div className="average__review__rating__title__modal">
          <div id="rating__title__modal">
            <i id="star__spot_page__title__modal" className="fas fa-star"></i>
            <div className="rat_revs_container__modal">
              {rating}
              <p id="reviews_count__title__modal">
                ({reviews_count} {reviews_count !== 1 ? "reviews" : "review"}){" "}
              </p>
            </div>
          </div>
        </div>
        <div className="all__rev__container__modal">
          {reviews?.map((review) => (
            <div key={review.id}>
              <div className="spot__reviews__modal">
                <div className="spot__reviews__author__modal">
                  <div
                    id="review__user__pic__modal"
                    onClick={() => history.push(`/users/${review.user.id}`)}
                  >
                    <img
                      className="pro__pic"
                      src={review.img.img_url}
                      alt="review user profile picture"
                    ></img>
                  </div>
                  <Link id="rev__author__modal" to={`/users/${review.user.id}`}>
                    {review.user.username}
                  </Link>
                  <div id="review__date__modal">March 2021</div>
                </div>
                <div className="spot__reviews__comment__modal">
                  {review.comment}{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
