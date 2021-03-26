import React from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
// import { closePictureSlider } from "../../store/modal.js";
import PictureSlider from "./PictureSlider";

Modal.setAppElement(document.getElementById("root"));

const PictureSliderModal = () => {
  // const dispatch = useDispatch();
  const pictureSliderState = useSelector(
    (state) => state.modal.pictureSliderShow
  );

  //   console.log("STATEE", pictureSliderState);

  // const closeModal = () => dispatch(closePictureSlider());

  return (
    <>
      <Modal
        isOpen={pictureSliderState}
        closeTimeoutMS={200}
        // onRequestClose={closeModal}
        contentLabel="Picture Slider Modal"
        overlayClassName="PictureOuterModal"
        // style={customStyles}
        className="InnerModal"
      >
        <PictureSlider />
      </Modal>
    </>
  );
};

export default PictureSliderModal;
