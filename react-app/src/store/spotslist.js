const SPOTSLIST_QUERY = "spotslist/query";

const spotslistQuery = (listArr) => {
  return {
    payload: listArr,
    type: SPOTSLIST_QUERY,
  };
};

export const spotslistQueryTest = () => async (dispatch) => {
  const res = await fetch("/api/spotslist/", {
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  dispatch(spotslistQuery(data.spots));
};

const initialState = {};
const spotslistReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case SPOTSLIST_QUERY:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default spotslistReducer;
