import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchAllBookings } from "../../../store/bookings";
import "./SingleBooking.css";

export default function SingleBooking({ booking, user_id }) {
  const dispatch = useDispatch();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const history = useHistory();
  const handleSpotsPageRedirect = (spot_id) => {
    history.push(`/spots/${spot_id}`);
    window.scrollTo(0, 0);
  };
  const handleCancelTrip = async (booking_id) => {
    if (window.confirm("Are you sure you want to cancel this trip?")) {
      const res = await fetch(`/api/users/bookings/delete`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: booking_id,
      });
      dispatch(fetchAllBookings(user_id));
    }
  };
  const startDate = new Date(booking.start_date);
  const endDate = new Date(booking.end_date);
  return (
    <div className="singlebooking__container">
      <div
        className="singlebooking-image__container"
        onClick={() => {
          handleSpotsPageRedirect(booking.spot.id);
        }}
      >
        <img src={booking.spot.pictures[0]} />
      </div>
      <div
        className="singlebooking-info__container"
        onClick={() => {
          handleSpotsPageRedirect(booking.spot.id);
        }}
      >
        <div className="singlebooking-title">{booking.spot.title}</div>
        <div className="singlebooking-daterange__container">
          {monthNames[startDate.getMonth()]} {startDate.getDate()} -{" "}
          {monthNames[endDate.getMonth()]} {endDate.getDate()}
        </div>
      </div>
      <div className="singlebooking-cancel__container">
        <button
          className="cancel-button"
          onClick={() => handleCancelTrip(booking.id)}
        >
          Cancel Trip
        </button>
      </div>
    </div>
  );
}
