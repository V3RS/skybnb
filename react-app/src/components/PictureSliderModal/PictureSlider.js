import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getOneSpot } from "../../services/spot";
import { useDispatch } from "react-redux";
import { closePictureSlider } from "../../store/modal.js";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import "./PictureSlider.css";

export default function PictureSlider() {
  const { spotId } = useParams();
  const [pictures, setPictures] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOneSpot(spotId);
      setPictures(data.pictures);
    };
    fetchData();
  }, [spotId]);

  const closeModal = () => dispatch(closePictureSlider());
  return (
    <div>
      <button className="close__modal__pictures" onClick={closeModal}>
        <i className="fas fa-times fa-lg close"></i>
        <div id="close">Close</div>
      </button>
      <button id="pic__sh" className="picture-shbtns">
        <i className="far fa-share-square fa-2x"></i>
      </button>
      <button className="picture-shbtns">
        <i className="far fa-heart fa-2x"></i>
      </button>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={pictures.length}
      >
        <Slider className="slider__container">
          {pictures?.map((picture, i) => (
            <Slide index={i} key={picture.id}>
              <div>
                <img
                  className="slider__pictures"
                  src={picture.img_url}
                  alt="spot"
                />
              </div>
            </Slide>
          ))}
        </Slider>
        <ButtonBack id="left__btn">
          <i className="fas fa-angle-left fa-2x"></i>
        </ButtonBack>
        <ButtonNext id="right__btn">
          <i className="fas fa-angle-right fa-2x"></i>
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
}
