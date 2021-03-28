import React from "react";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import "./SpotsListPage.css";

import MapContainer from "./MapContainer";
import SpotsListEle from "./SpotsListEle";
// import { spotslistSearch } from "../../store/spotslist.js";

export default function SpotsListPage() {
  // const dispatch = useDispatch();
  // const history = useHistory();
  const spotslist = useSelector((state) => state.spotslist.spots);

  const locations = spotslist?.map((spot) => {
    return { name: spot.title, location: { lat: spot.lat, lng: spot.lng } };
  });
  // const searchQuery = useSelector((state) => state.spotslist.search_extras);
  // const handleSpotsPageRedirect = (id) => {
  //   alert("boo");
  //   history.push(`/spots/${id}`);
  // };
  // const handleTest = () => {
  //   alert("testing");
  // };
  return (
    <div className="spotslistpage-container">
      <div className="spotslistpage-spotslist-container">
        <div className="spotslist-header">
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
        <div className="spl__container ">
          {
            spotslist?.map((spot) => {
              return (
                <SpotsListEle
                  className="spotslistele"
                  id={spot.id}
                  imgs={spot.pictures}
                  location_desc={spot.description.slice(0, 35)}
                  title={spot.title}
                  description={spot.address}
                  price={spot.price}
                  rating={spot.rating}
                  reviews_count={spot.reviews_count}
                  key={spot.id}
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
      </div>

      <div className="spotslistpage-map-container">
        {/* <h3>Googlemaps here</h3> */}
        <br></br>
        <br></br>
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
