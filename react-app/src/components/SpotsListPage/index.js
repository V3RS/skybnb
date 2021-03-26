import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./SpotsListPage.css";

import MapContainer from "./MapContainer";
import SpotsListEle from "./SpotsListEle";
import { spotslistSearch } from "../../store/spotslist.js";

export default function SpotsListPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const spotslist = useSelector((state) => state.spotslist.spots);
  const searchExtras = useSelector((state) => state.spotslist.search_extras);
  const [locations, setLocations] = useState();
  useEffect(() => {
    setLocations(
      spotslist?.map((spot) => {
        return { name: spot.title, location: { lat: spot.lat, lng: spot.lng } };
      })
    );
  }, [locations]);

  return (
    <div className="spotslistpage-container">
      <div className="spotslistpage-spotslist-container">
        <div className="spotslist-header">
          {/* {!spotslist && (
            <>
              <div className="spotslist-info">
                <p>Search meta-data here</p>
                <h2>Search Criteria Display - e.g. Unique Stay</h2>
              </div>
            </>
          )}
          {spotslist && (
            <>
              <div className="spotslist-info">
                <p>Spots found!</p>
                <h2>Searched for "{searchExtras.searchQuery}" Stays</h2>
              </div>
            </>
          )} */}
          <div className="spotslist-info">
            <p>Search meta-data here</p>
            <h2>Search Criteria Display - e.g. Unique Stay</h2>
          </div>

          <div className="spotslistpage-filter-btn-container">
            <button className="spotslistpage-filter-btn">
              Cancellation flexibility
            </button>
            <button className="spotslistpage-filter-btn">Entire place</button>
            <button className="spotslistpage-filter-btn">Price</button>
            <button className="spotslistpage-filter-btn">More filters</button>
          </div>
        </div>
        {
          spotslist &&
            spotslist.map((spot) => {
              return (
                <SpotsListEle
                  className="spotslistele"
                  id={spot.id}
                  img={spot.pictures[1]}
                  location_desc={spot.description.slice(0, 42) + "..."}
                  title={spot.title}
                  description="Testing · testing · testing · testing"
                  rating={spot.rating}
                  reviews_count={spot.reviews_count}
                  price={spot.price}
                />
              );
            })
          // <SpotsListEle
          //   img="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          //   location_desc="Somewhere in a galaxy far far away"
          //   title="Modernly decorated room"
          //   description="4 guests · 1 bedroom · 2 beds · 1 bath"
          //   star={4.5}
          //   price={42}
          //   total={126}
          // />
        }
      </div>

      <div className="spotslistpage-map-container">
        {locations && <MapContainer locations={locations} />}
        {!locations && (
          <MapContainer
            locations={[
              {
                name: "App Academy",
                location: { lat: 37.799278, lng: -122.401138 },
              },
              {
                name: "Jedi Temple",
                location: { lat: 37.550409, lng: -122.059313 },
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}
