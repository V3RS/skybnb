const SPOTSLIST_QUERY = "spotslist/query";

const spotslistQuery = (listArr) => {
  return {
    payload: listArr,
    type: SPOTSLIST_QUERY,
  };
};

export const spotslistSearch = (searchQuery) => async (dispatch) => {
  const res = await fetch(`/api/spots/search`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: searchQuery,
  });
  const data = await res.json();
  data["search_extras"] = {
    searchQuery: searchQuery,
  };
  const ret_obj = {
    spots: data.spots,
    search_extras: { searchQuery: searchQuery },
  };
  dispatch(spotslistQuery(ret_obj));
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
