import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getOneSpot } from "../../services/spot";
import "./SpotPage.css";

export default function SpotPage() {
  const { spotId } = useParams();
  const [spot, setSpot] = useState({});

  useEffect(async () => {
    const fetchData = async () => {
      const data = await getOneSpot(spotId);
      setSpot(data);
    };
    fetchData();
  }, []);

  // console.log("SPOTT", spot);

  const radIdFunc = (i) => {
    if (i === 2) return "fourth__pic";
    else if (i === 3) return "fifth__pic";
    else return "other__pics";
  };

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
                />
              </div>
            ))}
          </div>
          <div className="four_pics_container">
            {spot?.pictures?.slice(1).map((picture, i) => (
              <div key={picture.id}>
                <img
                  className="spot__pictures"
                  id={radIdFunc(i)}
                  src={picture.img_url}
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
      </div>
    </div>
  );
}
