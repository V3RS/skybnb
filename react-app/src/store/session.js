import { login, authenticate, demoLogin } from "../services/auth";

const LOGIN = "session/LOGIN";


const loginAction = (user) => ({
  type: LOGIN,
  user,
});



export const loginUser = ({ email, password }) => async (dispatch) => {
  const user = await login(email, password);
  if (user) {
    // console.log(user);
    const loggedInUser = user;
    dispatch(loginAction(loggedInUser));
    return loggedInUser;
  }
};

export const demoLoginUser = () => async (dispatch) => {
  const user = await demoLogin();
  if (user) {
    const loggedInUser = user;
    dispatch(loginAction(loggedInUser));
    return loggedInUser;
  }
};

export const restoreUser = () => async (dispatch) => {
  const user = await authenticate();
  dispatch(loginAction(user));
  return user;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      const newState = {};
      newState.username = action.user.username;
      newState.id = action.user.id;
      return newState;
    }
    default:
      return state;
  }
};

export default sessionReducer;
