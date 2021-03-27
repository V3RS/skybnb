const BOOK_SPOT = "booking/add";

const addOneBooking = () => {
    return {
        type: BOOK_SPOT,
    }
}


export const bookSpot = (spotId, startDate, endDate, userId) => async(dispatch) => {
    console.log(spotId, startDate, endDate, userId)
    const response = await fetch("/api/spots/book", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            spotId,
            startDate,
            endDate,
            userId,
        })
    })
    const data = await response.json()
    // dispatch(addOneBooking(data))
    return data
}


const initialState = {}

const spotReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type){
        case BOOK_SPOT:
            newState = action.payload
            return newState
        default:
            return state
    }
}

export default spotReducer