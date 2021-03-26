import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getOneSpot } from "../../services/spot";
import { useDispatch } from "react-redux";
import { openPictureSlider } from "../../store/modal.js";
import { DateRange } from "react-date-range"
import "./SpotPage.css";

export default function SpotPage() {
  const { spotId } = useParams();
  const [spot, setSpot] = useState({});
  const dispatch = useDispatch();

  const [ranges, setRanges] = useState([{
    start: new Date(),
    endDate: null,
    key: 'selection'
  }])




  useEffect(async () => {
    const fetchData = async () => {
      const data = await getOneSpot(spotId);
      setSpot(data);
    };
    fetchData();
  }, []);

  const openSlider = () => dispatch(openPictureSlider());

  // console.log("SPOTT", spot);

  const radIdFunc = (i) => {
    if (i === 2) return "fourth__pic";
    else if (i === 3) return "fifth__pic";
    else return "other__pics";
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(ranges)
  }
  const today = new Date();
  return (
    <div id="spc">
      <div className="spot-page-container">
        <div className="spot-page-title">
          <div>{spot?.title}</div>
        </div>
        <div className="spot-secondHeading">
          <div className="rating__address">
            <div id="rating">
              <i id="star__spot_page" className="fas fa-star"></i>
              {spot?.rating}
              <p id="reviews_count">
                ({spot?.reviews_count}{" "}
                {spot?.reviews_count != 1 ? "reviews" : "review"}){" "}
              </p>
            </div>
            <div className="spot__address">{spot?.address}</div>
          </div>
          <div className="spot-shbtns-container">
            <button className="spot-shbtns">
              <i class="far fa-share-square"></i>Share
            </button>
            <button className="spot-shbtns">
              <i class="far fa-heart"></i>Save
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
                  alt="spot-picture"
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
                  alt="spot-picture"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="host__detail__container">
          <div className="host__title">
            {spot?.title} by{" "}
            <Link id="host" to={`/users/${spot.host_id}`}>
              {spot?.host?.username}
            </Link>
          </div>
        </div>
        <div className="bookingform__container">
          <form onSubmit={(e) => handleSubmit(e)}>
          <div className="bookingform__title">
            <h2>${spot?.price}/night</h2>
            <h4><i id="star__spot_page" className="fas fa-star"></i>{spot?.rating}</h4>
          </div>
          <div className="bookingform__date">
            <DateRange
              minDate={today}
              // disabledDates={[]}
              editableDateInputs={true}
              onChange={item => setRanges([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={ranges}
              />
          </div>
          <div className='submit__container'>
            <button className='bookingform__submit' type='submit'>Book Trip</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
