import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import LogoutButton from "../auth/LogoutButton";
import logo from "./logo.png";
import * as spotslistActions from "../../store/spotslist";
import { openSignup, openLogin } from "../../store/modal.js";

const NavBar = ({ authenticated, setAuthenticated }) => {
  const session = useSelector((state) => state.session);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const toggle = () => setOpen(!open);
  const toggleSearch = () => setOpenSearch(!openSearch);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log("test");
    e.preventDefault();
    history.push("/spotslistpage");
    return dispatch(spotslistActions.spotslistSearch(searchQuery));
  };

  const hostSessionHandler = () => {
    if (session.id) {
      history.push("/createspot");
      window.scrollTo(0, 0);
    } else dispatch(openSignup());
  };

  return (
    <div className="navbar__container">
      <div className="navbar">
        <div className="navbar__header" onClick={() => history.push("/")}>
          <img
            className="navbar__icon"
            src="https://skybnb.s3.amazonaws.com/logo.png"
            alt=""
          />
          <h2>skybnb</h2>
        </div>

        {!openSearch && (
          <div
            className="navbar__search"
            onClick={() => toggleSearch(!openSearch)}
          >
            <button>Start your search</button>
            <i class="fas fa-search"></i>
          </div>
        )}
        {openSearch && (
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="search__form"
            method="POST"
          >
            <div className="searchform__container">
                <i className="searchform__cancel"
                onClick={() => toggleSearch(!openSearch)}
                class="far fa-times-circle fa-2x"></i>
              <div className="location__container">
                <label>Location/Title</label>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type="text"
                ></input>
              </div>
              <div className="guests__container">
                <label>Guests</label>
                <input type="number"></input>
              </div>
              <button className="searchform__button" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
        )}
        <div className="navbar__account">
          <p
            onClick={() => {
              if (session.id) {
                history.push("/createspot");
                window.scrollTo(0, 0);
              } else dispatch(openSignup());
            }}
          >
            Become a host
          </p>
          <a
            href="https://github.com/V3RS/skybnb"
            target="_blank"
            rel="noopener noreferrer"
            id="github__link"
          >
            <i class="fab fa-github"></i>
          </a>
          <div className="account__dropdown" onClick={() => toggle(!open)}>
            <i class="fas fa-bars"></i>
            <i class="fas fa-user-circle fa-2x"></i>
          </div>
          {open && !authenticated && (
            <div className="dropdown__menu">
              <ul className="dropdown__list">
                <p onClick={() => dispatch(openLogin())}>Log in</p>
                <p onClick={() => dispatch(openSignup())}>Sign up</p>
                <p
                  onClick={() => {
                    if (session.id) {
                      history.push("/createspot");
                      window.scrollTo(0, 0);
                    } else dispatch(openSignup());
                  }}
                >
                  Host your home
                </p>
              </ul>
            </div>
          )}
          {open && authenticated && (
            <div className="dropdown__menu">
              <ul className="dropdown__list">
                <p onClick={() => history.push(`/users/${session.id}`)}>
                  Account
                </p>
                <p
                  onClick={() => {
                    if (session.id) {
                      history.push("/createspot");
                      window.scrollTo(0, 0);
                    } else dispatch(openSignup());
                  }}
                >
                  Host your home
                </p>
                <LogoutButton
                  authenticated={authenticated}
                  setAuthenticated={setAuthenticated}
                />
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
