import React from "react";
import "./SpotsListEle.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { openPictureSlider } from "../../../store/modal.js";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function SpotsListEle({
  id,
  imgs,
  location_desc,
  title,
  description,
  rating,
  reviews_count,
  price,
}) {
  const history = useHistory();
  const dispatch = useDispatch();

  // const openSlider = () => dispatch(openPictureSlider());

  const handleSpotsPageRedirect = (spot_id) => {
    history.push(`/spots/${spot_id}`);
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="spotslistele"
      onClick={(e) => {
        if (
          e.target.id === "slider_btn1" ||
          e.target.id === "slider_btn2" ||
          e.target.id === "not1" ||
          e.target.id == "not2" ||
          e.target.id == "not3" ||
          e.target.tagName.toLowerCase() === "button"
        )
          return;
        handleSpotsPageRedirect(id);
      }}
    >
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={imgs.length}
      >
        <Slider className="slider__container__spot__list">
          {imgs?.map((img, i) => (
            <Slide index={i} key={img}>
              <div>
                <img
                  className="slider__pictures__spot__list"
                  src={img}
                  alt="spot-img"
                />
              </div>
            </Slide>
          ))}
        </Slider>
        <div id="search_slider_btns">
          <ButtonBack id="not1">
            <i className="fas fa-angle-left" id="slider_btn1"></i>
          </ButtonBack>
          <ButtonNext id="not2">
            <i className="fas fa-angle-right" id="slider_btn2"></i>
          </ButtonNext>
        </div>
        <div id="not3">
          <DotGroup />
        </div>
      </CarouselProvider>
      <i className="far fa-heart fa-lg"></i>
      <div className="spotslistele-info-container">
        <div className="spotslistele-info-top">
          <span>{location_desc}</span>
          <h3>{title}</h3>
          <div className="info-top-line"></div>
          <p>{description}</p>
        </div>

        <div className="spotslistele-info-bot">
          {reviews_count > 0 && (
            <i className="fas fa-star">
              <div>{rating}</div>
              <div className="review_count">({reviews_count})</div>
            </i>
          )}

          <div className="spotslistele-price-div">
            <div className="spotslistele-price">
              <strong>${price}</strong> / night
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
