const MODAL_OPEN_LOGIN = "loginModal/open";
const MODAL_CLOSE_LOGIN = "loginModal/close";
const MODAL_OPEN_SIGNUP = "signupModal/open";
const MODAL_CLOSE_SIGNUP = "signupModal/close";
const MODAL_OPEN_SEARCH = "searchModal/open";
const MODAL_CLOSE_SEARCH = "searchModal/close";
const MODAL_OPEN_PICTURESLIDER = "pictureSlider/open";
const MODAL_CLOSE_PICTURESLIDER = "pictureSlider/close";
const MODAL_OPEN_DROPZONE = "dropzone/open";
const MODAL_CLOSE_DROPZONE = "dropzone/close";
const MODAL_OPEN_COMINGSOON = "comingSoon/open";
const MODAL_CLOSE_COMINGSOON = "comingSoon/close";
const MODAL_OPEN_REVIEWS = "reviews/open";
const MODAL_CLOSE_REVIEWS = "reviews/close";
const MODAL_OPEN_REVIEWFORM = "reviewForm/open";
const MODAL_CLOSE_REVIEWFORM = "reviewForm/close";

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
export const openDropZone = () => {
  return {
    type: MODAL_OPEN_DROPZONE,
  };
};

export const closeDropZone = () => {
  return {
    type: MODAL_CLOSE_DROPZONE,
  };
};

export const openComingSoon = () => {
  return {
    type: MODAL_OPEN_COMINGSOON,
  };
};

export const closeComingSoon = () => {
  return {
    type: MODAL_CLOSE_COMINGSOON,
  };
};

export const openReviews = () => {
  return {
    type: MODAL_OPEN_REVIEWS,
  };
};

export const closeReviews = () => {
  return {
    type: MODAL_CLOSE_REVIEWS,
  };
};

export const openReviewForm = () => {
  return {
    type: MODAL_OPEN_REVIEWFORM,
  };
};

export const closeReviewForm = () => {
  return {
    type: MODAL_CLOSE_REVIEWFORM,
  };
};

const initialState = {
  loginShow: false,
  signupShow: false,
  pictureSliderShow: false,
  dropZoneShow: false,
  comingSoonShow: false,
  reviewsShow: false,
  reviewFormShow: false,
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
    case MODAL_OPEN_DROPZONE:
      newState = Object.assign({}, state, { dropZoneShow: true });
      return newState;
    case MODAL_CLOSE_DROPZONE:
      newState = Object.assign({}, state, { dropZoneShow: false });
      return newState;
    case MODAL_OPEN_COMINGSOON:
      newState = Object.assign({}, state, { comingSoonShow: true });
      return newState;
    case MODAL_CLOSE_COMINGSOON:
      newState = Object.assign({}, state, { comingSoonShow: false });
      return newState;
    case MODAL_OPEN_REVIEWS:
      newState = Object.assign({}, state, { reviewsShow: true });
      return newState;
    case MODAL_CLOSE_REVIEWS:
      newState = Object.assign({}, state, { reviewsShow: false });
      return newState;
    case MODAL_OPEN_REVIEWFORM:
      newState = Object.assign({}, state, { reviewFormShow: true });
      return newState;
    case MODAL_CLOSE_REVIEWFORM:
      newState = Object.assign({}, state, { reviewFormShow: false });
      return newState;
    default:
      return state;
  }
};

export default modalReducer;
