import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getOneSpot, getSpotPictures } from "../../services/spot";

import "./SpotPage.css";

export default function SpotPage() {
  const { spotId } = useParams();
  const [spot, setSpot] = useState({});
  const [pictures, setPictures] = useState([]);
  // this needs to be fixed
  useEffect(async () => {
    const fetchData = async () => {
      const data = await getOneSpot(spotId);
      const pictureData = await getSpotPictures(spotId);
      setSpot(data);
      setPictures(pictureData.pictures);
    };
    fetchData();
  }, []);

  console.log("SPOTT", spot);
  console.log("PICTURESSS", pictures);

  return (
    <div id="spc">
      <div className="spot-page-container">
        <div className="spot-page-title">
          <div>{spot?.title}</div>
        </div>
        <div className="spot-secondHeading">
          <div className="rating__address">
            <div>
              <i className="fas fa-star"></i> 4.82
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
          {pictures?.map((picture) => (
            <div key={picture.id}>
              <img src={picture.img_url} alt="spot-picture" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
