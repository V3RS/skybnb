import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SpotsListPage.css";

import MapContainer from "./MapContainer";
import SpotsList from "./SpotsList";

export default function SpotsListPage() {
  return (
    <div className="spotslistpage-container">
      <div className="spotslistpage-spotslist-container">
        <div className="spotslist-info">
          <p>Search meta-data here</p>
        </div>
        <h3>Search Criteria Display - e.g. Unique Stay</h3>
        <button>Cancellation flexibility</button>
        <button>Entire place</button>
        <button>Price</button>
        <button>Instant Book</button>
        <button>More filters</button>
        <SpotsList
          img="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          location_desc="Somewhere in a galaxy far far away"
          title="modernly decorated room"
          description="2 bedroom apartment with full amenities"
          star={4.5}
          price={42}
          total={126}
        />
      </div>

      <div className="spotslistpage-map-container">
        <h3>Googlemaps here</h3>
        <MapContainer />
      </div>
    </div>
  );
}
