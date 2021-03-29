import React from "react"
import Modal from "react-modal"
import { useSelector, useDispatch } from "react-redux"
import { closeBookingAlert } from "../../store/modal.js"
import AlertForm from "./AlertForm"

Modal.setAppElement(document.getElementById("root"))

const AlertModal = () => {
    const dispatch = useDispatch()
    const alertState = useSelector((state) => state.modal.bookingAlertShow)

    const closeModal = () => dispatch(closeBookingAlert)

    return (
        <>
            <Modal
                isOpen={alertState}
                closeTimeoutMs={200}
                onRequestClose={closeModal}
                contentLabel="Alert Modal"
                overlayClassName="OuterModal"
                className="InnerModal"
            >
                <AlertForm />
            </Modal>
        </>
    )
}

export default AlertModal