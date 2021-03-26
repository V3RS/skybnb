import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getOneSpot } from "../../services/spot";
import { useSelector } from "react-redux";

import "./PictureSlider.css";

export default function PictureSlider() {
  const { spotId } = useParams();
  const spotslist = useSelector((state) => state.spotslist.spots);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    if (spotId) {
      const fetchData = async () => {
        const data = await getOneSpot(spotId);
        setPictures(data.pictures);
      };
      fetchData();
    } else {
      // console.log("do i exist?");
      setPictures(spotslist[0].pictures);
    }
  }, [spotId, spotslist]);

  return (
    <div>
      {pictures?.slice(0, 1).map((picture) => (
        <div key={spotId ? picture.id : picture}>
          <img
            className="slider__pictures"
            src={spotId ? picture?.img_url : picture}
            alt="spot"
          />
        </div>
      ))}
    </div>
  );
}
