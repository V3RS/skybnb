import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeReviewForm } from "../../store/modal.js";
import ReviewForm from "./ReviewForm";

Modal.setAppElement(document.getElementById("root"));

const ReviewFormModal = () => {
  const dispatch = useDispatch();
  const reviewsState = useSelector((state) => state.modal.reviewFormShow);

  const closeModal = () => dispatch(closeReviewForm());

  return (
    <>
      <Modal
        isOpen={reviewsState}
        closeTimeoutMS={200}
        onRequestClose={closeModal}
        contentLabel="Reviews Modal"
        overlayClassName="OuterModal"
        // style={customStyles}
        className="InnerModal"
      >
        <ReviewForm />
      </Modal>
    </>
  );
};

export default ReviewFormModal;
