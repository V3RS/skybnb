import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { openDropZone, closeDropZone } from "../../store/modal.js";
import DropZone from "./DropZone.js";

Modal.setAppElement(document.getElementById("root"));

const DropZoneModal = () => {
  const dispatch = useDispatch();
  const dropZoneState = useSelector(
    (state) => state.modal.dropZoneShow
  );

  const closeModal = () => dispatch(closeDropZone());

  return (
    <>
    <button className='picture_button' onClick={() => dispatch(openDropZone())}>Upload a Picture</button>
    <Modal
      isOpen={dropZoneState}
      closeTimeoutMS={200}
      onRequestClose={closeModal}
      contentLabel="Picture Upload Modal"
      overlayClassName="OuterModal"
      className="InnerModal"
    >
    <DropZone />
    </Modal>
    </>
  )

}

export default DropZoneModal;
