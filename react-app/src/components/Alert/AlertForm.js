import React from "react"

import { closeBookingAlert } from "../../store/modal.js"
import { useDispatch } from "react-redux"
import "./AlertForm.css"

const AlertForm = () => {
    const dispatch = useDispatch()
    return(
        <div className="bookingalert__container">
            <h2>Successfully booked.</h2>
            <button onClick={() => dispatch(closeBookingAlert())}>Close</button>
        </div>
    )
}

export default AlertForm