import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/Navbar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import SpotPage from "./components/SpotPage";
import { authenticate } from "./services/auth";
import * as sessionActions from "./store/session";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

import SignupModal from "./components/SignupModal";
import LoginModal from "./components/LoginModal";
import SpotsListPage from "./components/SpotsListPage";
import ProfileImgForm from "./components/ProfileImgForm";
import ProfilePage from "./components/ProfilePage";
import CommingSoon from "./components/ComingSoon";
import PictureSliderModal from "./components/PictureSliderModal";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <LoginModal
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <SignupModal
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/spotslistpage" exact={true}>
          <SpotsListPage></SpotsListPage>
          <PictureSliderModal />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
          <SignupModal
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          ></SignupModal>
          <LoginModal
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          ></LoginModal>
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/upload-test" exact={true}>
          <ProfileImgForm />
        </Route>
        <Route path="/users/:id" exact={true}>
          <ProfilePage />
        </Route>
        <Route path="/createspot" exact={true}>
          <CommingSoon />
        </Route>
        <ProtectedRoute
          path="/users"
          exact={true}
          authenticated={authenticated}
        >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute
          path="/users/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <h1>My Home Page</h1>
        </ProtectedRoute>
        <Route path="/spots/:spotId" exact={true}>
          <SpotPage />
          <PictureSliderModal />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
