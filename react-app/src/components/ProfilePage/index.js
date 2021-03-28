import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import DropZoneModal from "../DropZoneModal";
import SingleBooking from "./SingleBooking";
import SingleReview from "./SingleReview";
import { fetchAllBookings } from "../../store/bookings.js";
import "./profilePage.css";

export default function ProfilePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings);
  const [user, setUser] = useState();
  const [picture, setPicture] = useState(
    "https://53.cdn.ekm.net/ekmps/shops/stormtrooper/images/original-stormtrooper-stunt-helmet-109-p.jpg?v=1"
  );
  const [reviews, setReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(false);
  const session = useSelector((state) => state.session);

  useEffect(() => {
    async function fetchBookings() {
      dispatch(fetchAllBookings(id));
    }
    fetchBookings();
  }, []);
  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`/api/users/${id}`);
      const data = await res.json();
      setUser(data);
    }

    fetchUser();
  }, [id]);

  useEffect(() => {
    async function fetchImg(data) {
      const image = await fetch(`/api/users/picture/${data.id}`);
      const img_url = await image.json();
      if (img_url) setPicture(img_url.img_url);
    }

    async function fetchReviews(data) {
      const res = await fetch(`/api/users/reviews/${data.id}`);
      const reviews_obj = await res.json();
      if (res.ok) setReviews(reviews_obj["user_reviews"]);
    }

    if (user) {
      fetchImg(user);
      fetchReviews(user);
    }
  }, [user]);

  const username = user?.username;
  console.log(reviews);
  const handleToggleReviews = () => {
    setShowReviews(!showReviews);
  };
  const handleToggleReviewsFalse = () => {
    setShowReviews(false);
  };
  return (
    <div className="profile_container">
      <div className="profile_container_left">
        <div className="profile_card">
          <img src={picture} className="profile_picture" alt="" />
          {/* <button className="picture_button" onClick={picClick}>Upload a Picture</button> */}
          {session && session.id && id === session.id.toString() && (
            <DropZoneModal />
          )}
          <div className="user_confirmed">{username} Confirmed</div>
          <div>
            <i className="fas fa-check-square"></i> E-Mail
          </div>
        </div>
      </div>
      <div className="profile_container_right">
        <div className="profile_info">
          {session.id && (
            <>
              <h1 className="user_greeting">Hi, I'm {username}</h1>
              <div className="report_user_container">
                <div
                  className="profile-reviews-link"
                  onClick={handleToggleReviews}
                >
                  <i className="fas fa-star"> </i> {reviews.length} Reviews
                </div>
                <div className="spacer">·</div>
                <div
                  className="profile-bookings-link"
                  onClick={handleToggleReviewsFalse}
                >
                  {bookings?.length} Bookings
                </div>
                <div className="spacer">·</div>
                <a className="report_user" href="/report_user">
                  Report User
                </a>
              </div>
            </>
          )}
        </div>
        {!showReviews && (
          <div className="profile_bookings">
            {bookings[0] && (
              <div className="profile_bookings_header">Bookings</div>
            )}
            {bookings &&
              bookings?.map((booking) => {
                return <SingleBooking booking={booking} user_id={id} />;
              })}
          </div>
        )}
        {showReviews && (
          <div className="profile_bookings">
            {reviews[0] && (
              <div className="profile_bookings_header">Reviews</div>
            )}
            {reviews?.map((review) => {
              return <SingleReview review={review} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
