import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { openPictureSlider, closePictureSlider } from "../../store/modal.js";
import PictureSlider from "./PictureSlider";

Modal.setAppElement(document.getElementById("root"));

const PictureSliderModal = () => {
  const dispatch = useDispatch();
  const pictureSliderState = useSelector(
    (state) => state.modal.pictureSliderShow
  );

  //   console.log("STATEE", pictureSliderState);

  const closeModal = () => dispatch(closePictureSlider());

  return (
    <>
      <p onClick={() => dispatch(openPictureSlider())}>Picture Slider</p>
      <Modal
        isOpen={pictureSliderState}
        closeTimeoutMS={200}
        onRequestClose={closeModal}
        contentLabel="Picture Slider Modal"
        overlayClassName="OuterModal"
        // style={customStyles}
        className="InnerModal"
      >
        <PictureSlider />
      </Modal>
    </>
  );
};

export default PictureSliderModal;
