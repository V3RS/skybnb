const MODAL_OPEN_LOGIN = "loginModal/open";
const MODAL_CLOSE_LOGIN = "loginModal/close";
const MODAL_OPEN_SIGNUP = "signupModal/open";
const MODAL_CLOSE_SIGNUP = "signupModal/close";
const MODAL_OPEN_SEARCH = "searchModal/open";
const MODAL_CLOSE_SEARCH = "searchModal/close";
const MODAL_OPEN_PICTURESLIDER = "pictureSlider/open";
const MODAL_CLOSE_PICTURESLIDER = "pictureSlider/close";

export const openLogin = () => {
  return {
    type: MODAL_OPEN_LOGIN,
  };
};

export const closeLogin = () => {
  return {
    type: MODAL_CLOSE_LOGIN,
  };
};

export const openSignup = () => {
  return {
    type: MODAL_OPEN_SIGNUP,
  };
};

export const closeSignup = () => {
  return {
    type: MODAL_CLOSE_SIGNUP,
  };
};

export const openSearch = () => {
  return {
    type: MODAL_OPEN_SEARCH,
  };
};

export const closeSearch = () => {
  return {
    type: MODAL_CLOSE_SEARCH,
  };
};

export const openPictureSlider = () => {
  return {
    type: MODAL_OPEN_PICTURESLIDER,
  };
};

export const closePictureSlider = () => {
  return {
    type: MODAL_CLOSE_PICTURESLIDER,
  };
};
const initialState = {
  loginShow: false,
  signupShow: false,
  pictureSliderShow: false,
};

const modalReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case MODAL_OPEN_LOGIN:
      newState = Object.assign({}, state, { loginShow: true });
      return newState;
    case MODAL_CLOSE_LOGIN:
      newState = Object.assign({}, state, { loginShow: false });
      return newState;
    case MODAL_OPEN_SIGNUP:
      newState = Object.assign({}, state, { signupShow: true });
      return newState;
    case MODAL_CLOSE_SIGNUP:
      newState = Object.assign({}, state, { signupShow: false });
      return newState;
    case MODAL_OPEN_SEARCH:
      newState = Object.assign({}, state, { searchShow: true });
      return newState;
    case MODAL_CLOSE_SEARCH:
      newState = Object.assign({}, state, { searchShow: false });
      return newState;
    case MODAL_OPEN_PICTURESLIDER:
      newState = Object.assign({}, state, { pictureSliderShow: true });
      return newState;
    case MODAL_CLOSE_PICTURESLIDER:
      newState = Object.assign({}, state, { pictureSliderShow: false });
      return newState;
    default:
      return state;
  }
};

export default modalReducer;
