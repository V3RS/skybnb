import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeReviews } from "../../store/modal.js";
import Reviews from "./Reviews";

Modal.setAppElement(document.getElementById("root"));

const ReviewsModal = ({ reviews, rating, reviews_count }) => {
  const dispatch = useDispatch();
  const reviewsState = useSelector((state) => state.modal.reviewsShow);

  const closeModal = () => dispatch(closeReviews());

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
        <Reviews
          reviews={reviews}
          rating={rating}
          reviews_count={reviews_count}
        />
      </Modal>
    </>
  );
};

export default ReviewsModal;
