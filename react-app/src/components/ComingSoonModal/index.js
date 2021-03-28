import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeComingSoon } from "../../store/modal.js";
import ComingSoon from "./ComingSoon";

Modal.setAppElement(document.getElementById("root"));

const ComingSoonModal = () => {
  const dispatch = useDispatch();
  const comingSoonState = useSelector((state) => state.modal.comingSoonShow);

  const closeModal = () => dispatch(closeComingSoon());

  return (
    <>
      <Modal
        isOpen={comingSoonState}
        closeTimeoutMS={200}
        onRequestClose={closeModal}
        contentLabel="Signup Modal"
        overlayClassName="OuterModal"
        // style={customStyles}
        className="InnerModal"
      >
        <ComingSoon />
      </Modal>
    </>
  );
};

export default ComingSoonModal;
