import { login } from "../services/auth";



const LOGIN = 'session/LOGIN'
const LOGOUT = 'session/LOGOUT'
const SIGNUP = 'users/SIGNUP'

const loginAction = user => ({
  type: LOGIN,
  user
})

const logout = () => ({
  type: LOGOUT
})

export const loginUser = ({email, password}) => async dispatch => {
  const user = await login(email, password);
  if (user){
    console.log(user);
    const loggedInUser = user
    dispatch(loginAction(loggedInUser.username))
    return loggedInUser
  }
};

const initialState = {user:null}

const sessionReducer = (state = initialState, action) => {
  switch(action.type){
    case LOGIN: {
      const newState = {}
      newState.username = action.user
      return newState;
    }
    default:
      return state;
  }
}


export default sessionReducer;