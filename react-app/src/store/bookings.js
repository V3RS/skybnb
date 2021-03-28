const ALL_BOOKINGS = "bookings/all_bookings";

const allBookings = (bookings_arr) => {
  return {
    type: ALL_BOOKINGS,
    payload: bookings_arr,
  };
};

export const fetchAllBookings = (user_id) => async (dispatch) => {
  const res = await fetch(`/api/users/bookings/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: user_id,
  });
  const bookings_obj = await res.json();
  if (res.ok) {
    dispatch(allBookings(bookings_obj.bookings));
  }
};



const initialState = [];
const bookingsReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ALL_BOOKINGS:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default bookingsReducer;
