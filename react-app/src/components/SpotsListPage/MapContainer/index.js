import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const MapContainer = ({ locations }) => {
  // const locations = spotslist?.map((spot) => {
  //   return { name: spot.title, location: { lat: spot.lat, lng: spot.lng } };
  // });

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
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 37.550409,
    lng: -122.059313,
  };

  return (
    <>
      {locations && (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLEMAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          >
            {locations.map((location) => {
              return (
                <Marker
                  key={location.name}
                  position={{ lat: location.lat, lng: location.lng }}
                />
              );
            })}
          </GoogleMap>
        </LoadScript>
      )}
    </>
  );
};

export default MapContainer;
