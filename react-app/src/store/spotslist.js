const SPOTSLIST_QUERY = "spotslist/query";

const spotslistQuery = (list) => {
  return {
    payload: list,
    type: SPOTSLIST_QUERY,
  };
};

export const spotslistQueryTest = () => (dispatch) => {};

const initialState = {};
const spotslistReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case SPOTSLIST_QUERY:
      newState = payload;
      return newState;
  }
};
