import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";
import { getOneSpot } from "../../services/spot";
import { useDispatch, useSelector } from "react-redux";
import {
  openPictureSlider,
  openComingSoon,
  openReviews,
  openSignup,
  openBookingAlert,
  openReviewForm,
} from "../../store/modal.js";
import ReviewsModal from "../ReviewsModal";
import ReviewFormModal from "../ReviewFormModal";

import AlertModal from "../Alert"

import { DateRange } from "react-date-range";

import MapContainer from "./MapContainer";

import * as bookingActions from "../../store/spot.js";

import "./SpotPage.css";

export default function SpotPage() {
  const { spotId } = useParams();
  const [spot, setSpot] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const session = useSelector((state) => state.session);
  const [ranges, setRanges] = useState([
    {
      start: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOneSpot(spotId);
      setSpot(data);
    };
    fetchData();
  }, [spotId]);

  const openSlider = () => dispatch(openPictureSlider());
  const openRev = () => dispatch(openReviews());

  // console.log("SPOTT", spot);

  const radIdFunc = (i) => {
    if (i === 2) return "fourth__pic";
    else if (i === 3) return "fifth__pic";
    else return "other__pics";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!session.id){
      dispatch(openSignup())
    } else if(ranges[0].startDate === null || ranges[0].endDate === null) {
      alert("Please enter dates for your trip.")
    } else {
      dispatch(
        bookingActions.bookSpot(
          spotId,
          ranges[0].startDate,
          ranges[0].endDate,
          session.id
          )
        )
        dispatch(openBookingAlert()); 
    }
  };
  const today = new Date();
  return (
    <div id="spc">
      <AlertModal/>
      <ReviewsModal
        reviews={spot?.reviews}
        rating={spot?.rating}
        reviews_count={spot?.reviews_count}
      />
      <ReviewFormModal />
      <div className="spot-page-container">
        <div className="spot-page-title">
          <h3>{spot?.title}</h3>
        </div>

        <div className="spot-secondHeading">
          <div className="rating__address">
            <div id="rating" onClick={openRev}>
              <i id="star__spot_page" className="fas fa-star"></i>
              {spot?.rating}
              <p id="reviews_count">
                ({spot?.reviews_count}{" "}
                {spot?.reviews_count !== 1 ? "reviews" : "review"})
              </p>
            </div>
            <a href="#spot__map">
              <div className="spot__address">{spot?.address}</div>
            </a>
          </div>
          <div className="spot-shbtns-container">
            <button
              className="spot-shbtns"
              onClick={() => dispatch(openComingSoon())}
            >
              <i className="far fa-share-square"></i>Share
            </button>
            <button
              className="spot-shbtns"
              onClick={() => dispatch(openComingSoon())}
            >
              <i className="far fa-heart"></i>Save
            </button>
          </div>
        </div>
        <div className="spot__pictures__container">
          <div className="first_pic_container">
            {spot?.pictures?.slice(0, 1).map((picture) => (
              <div key={picture.id}>
                <img
                  className="spot__first__picture"
                  src={picture?.img_url}
                  alt="spot"
                  onClick={openSlider}
                />
              </div>
            ))}
          </div>
          <div className="four_pics_container">
            {spot?.pictures?.slice(1, 5).map((picture, i) => (
              <div key={picture.id}>
                <img
                  className="spot__pictures"
                  id={radIdFunc(i)}
                  src={picture.img_url}
                  onClick={openSlider}
                  alt="spot"
                />
              </div>
            ))}
          </div>
          <div id="show__all__pics__container">
            <button id="showpics__btn" onClick={openSlider}>
              <i className="fas fa-images"></i>
              Show all photos
            </button>
          </div>
        </div>
        <div className="host__detail__container">
          <div className="host__title">
            {spot?.title} hosted by{" "}
            <Link id="host" to={`/users/${spot.host_id}`}>
              {spot?.host?.username}
            </Link>
          </div>
          <div id="spot__guests">
            {spot?.id % 2 === 0 ? "3" : "4"} guests ·{" "}
            {spot?.id % 2 === 0 ? "2" : "5"} bedroom ·{" "}
            {spot?.id % 2 === 0 ? "2" : "5"} bed ·{" "}
            {spot?.id % 2 === 0 ? "3" : "4"} bath
          </div>
          <div
            id="host__image"
            onClick={() => history.push(`/users/${spot.host_id}`)}
          >
            <img
              className="pro__pic"
              src={spot?.host_image?.img_url}
              alt="host profile picture"
            ></img>
          </div>
        </div>
        <div className="booking__and__amenties">
          <div className="amenities__container">
            <div>
              {spot?.amenities?.map((amenity) => {
                return (
                  <div className="amenity__li" key={amenity.id}>
                    {amenity.amenity}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bookingform__container">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="bookingform__title">
                <h2>${spot?.price}/night</h2>
                <h4>
                  <a href="#scr-reviews">
                    <i id="star__spot_page__cal" className="fas fa-star"></i>
                    <span id="cal_rating">{spot?.rating}</span>

                    <span id="cal_rev_count"> ({spot?.reviews_count})</span>
                  </a>
                </h4>
              </div>
              <div className="bookingform__date">
                <DateRange
                  minDate={today}
                  // disabledDates={[]}
                  editableDateInputs={true}
                  onChange={(item) => setRanges([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={ranges}
                />
              </div>
              <div className="submit__container">
                <button
                  id="scr-reviews"
                  className="bookingform__submit"
                  type="submit"
                >
                  Book Trip
                </button>
              </div>
            </form>
          </div>
        </div>
        <div id="description__container">
          <div id="spot__desc">{spot.description}</div>
          <div id="contact__host" onClick={() => dispatch(openComingSoon())}>
            Contact host
          </div>
        </div>
        <div id="reviews__container">
          <div className="average__review__rating__title">
            <div id="rating__title">
              <i id="star__spot_page__title" className="fas fa-star"></i>
              <div className="rat_revs_container">
                {spot?.rating}
                <p id="reviews_count__title">
                  ({spot?.reviews_count}{" "}
                  {spot?.reviews_count !== 1 ? "reviews" : "review"}){" "}
                </p>
              </div>
            </div>
          </div>
          <div id="all_rev_container">
            {spot?.reviews?.slice(0, 8).map((review) => (
              <div key={review.id}>
                <div className="spot__reviews">
                  <div className="spot__reviews__author">
                    <div
                      id="review__user__pic"
                      onClick={() => history.push(`/users/${review.user.id}`)}
                    >
                      <img
                        className="pro__pic"
                        src={review.img.img_url}
                        alt="review user profile picture"
                      ></img>
                    </div>
                    <Link id="rev__author" to={`/users/${review.user.id}`}>
                      {review.user.username}
                    </Link>
                    <div id="review__date">March 2021</div>
                  </div>
                  <div className="spot__reviews__comment">
                    {review.comment}{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div id="revs__btns__container">
            <div id="show__all__revs">
              <button id="revs__btn" onClick={openRev}>
                Show all reviews
              </button>
            </div>
            <div id="add__revs">
              <button
                id="add__revs__btn"
                onClick={
                  session.id
                    ? () => dispatch(openReviewForm())
                    : () => dispatch(openSignup())
                }
              >
                Add a review
              </button>
            </div>
          </div>
        </div>
        <div id="spot__map" className="spotmap__container">
          <MapContainer location={{ lat: spot.lat, lng: spot.lng }} />
        </div>
      </div>
    </div>
  );
}
