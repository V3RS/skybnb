import React from "react";
import { useHistory } from "react-router-dom";
import "./SingleBooking.css";

export default function SingleBooking({ booking }) {
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
  const startDate = new Date(booking.start_date);
  const endDate = new Date(booking.end_date);
  return (
    <div
      className="singlebooking__container"
      onClick={() => {
        handleSpotsPageRedirect(booking.spot.id);
      }}
    >
      <div className="singlebooking-image__container">
        <img src={booking.spot.pictures[0]} />
      </div>
      <div className="singlebooking-info__container">
        <div className="singlebooking-title">{booking.spot.title}</div>
        <div className="singlebooking-daterange__container">
          {monthNames[startDate.getMonth()]} {startDate.getDate()} -{" "}
          {monthNames[endDate.getMonth()]} {endDate.getDate()}
        </div>
      </div>
    </div>
  );
}
