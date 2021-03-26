import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = ({ location }) => {
  // const [currentPosition, setCurrentPosition] = useState({});

  // const success = (position) => {
  //   const currentPosition = {
  //     lat: position.coords.latitude,
  //     lng: position.coords.longitude,
  //   };
  //   setCurrentPosition(currentPosition);
  // };

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(success);
  // });
  const mapStyles = {
    height: "510px",
    width: "100%",
  };
  const defaultCenter = {
    lat: 37.550409,
    lng: -122.059313,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLEMAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      ></GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
