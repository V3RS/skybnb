import React, { useState, useEffect } from "react";
import "./SpotPage.css";
import { useParams } from "react-router";
import { getOneSpot, getSpotPictures } from "../../services/spot";

export default function SpotPage() {
  const { spotId } = useParams();
  const [spot, setSpot] = useState({});
  const [pictures, setPictures] = useState([]);
  // this needs to be fixed
  useEffect(async () => {
    // const fetchData = async () => {
    const data = await getOneSpot(spotId);
    const pictureData = await getSpotPictures(spotId);
    setSpot(data);
    setPictures(pictureData.pictures);
    // };
    // fetchData();
  }, []);

  console.log("SPOTT", spot);
  console.log("PICTURESSS", pictures);

  return (
    <div id="spc">
      <div className="spot-page-container">
        <div className="spot-page-title">
          <h1>{spot?.title}</h1>
          {pictures.map((picture) => (
            <div key={picture.id}>
              <img src={picture.img_url} alt="spot-picture" />
            </div>
          ))}
        </div>
        <div className="spot-secondHeading">
          <h3>Superhost</h3>
          <h3>City, State, Country</h3>
          <div className="spot-shbtns">
            <button>Share</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
