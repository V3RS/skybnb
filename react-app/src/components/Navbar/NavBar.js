import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";
import LoginModal from "../LoginModal";
import SignUpModal from "../SignupModal";
import LogoutButton from "../auth/LogoutButton";
import logo from "./logo.png";

const NavBar = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const toggle = () => setOpen(!open);
  const toggleSearch = () => setOpenSearch(!openSearch);
  if (authenticated) {
  }

  return (
    <div className="navbar__container">
      <div className="navbar">
        <div className="navbar__header" onClick={() => history.push("/")}>
          <img className="navbar__icon" src={logo} alt="" />
          <h2>skybnb</h2>
        </div>

        <div className="navbar__search">
          <button onClick={() => toggleSearch(!openSearch)}>
            Start your search
          </button>
          <i class="fas fa-search"></i>
        </div>
        <div className="navbar__account">
          <p onClick={() => history.push("/createspot")}>Become a host</p>
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
        </div>
        {open && !authenticated && (
          <div className="dropdown__menu">
            <ul className="dropdown__list">
              <LoginModal
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              ></LoginModal>
              <SignUpModal
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
              <p onClick={() => history.push("/createspot")}>Host your home</p>
            </ul>
          </div>
        )}
        {open && authenticated && (
          <div className="dropdown__menu">
            <ul className="dropdown__list">
              <p onClick={() => history.push("/account")}>Account</p>
              <p onClick={() => history.push("/createspot")}>Host your home</p>
              <LogoutButton
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            </ul>
          </div>
        )}
      </div>
      {/* {openSearch && (
      <div className="searchform__container">
        <div className='location__container'>
          <label>Location</label>
          <input type='text'></input>
        </div>
        <div>
          <label>Check in</label>
        </div>
        <div>
          <label>Check out</label>
        </div>
        <div>
          <label>Guests</label>
        </div>
      </div>
    )} */}
    </div>
  );
};

export default NavBar;
