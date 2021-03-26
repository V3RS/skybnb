import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = ({ location }) => {
  const mapStyles = {
    height: "510px",
    width: "100%",
  };
  // const defaultCenter = {
  //   lat: 37.550409,
  //   lng: -122.059313,
  // };
  // console.log("LOCATION", location);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLEMAPS_API_KEY}>
      {location && (
        <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={location}>
          <Marker position={location} />
        </GoogleMap>
      )}
    </LoadScript>
  );
};

export default MapContainer;
