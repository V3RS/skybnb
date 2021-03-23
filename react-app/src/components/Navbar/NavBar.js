import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import './Navbar.css'
import LoginModal from '../LoginModal'
import SignUpModal from '../SignupModal'
import LogoutButton from '../auth/LogoutButton'
import { authenticate } from '../../services/auth';

const NavBar = ({ authenticated, setAuthenticated }) => {
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  if (authenticated){

  }

  return (
    <div className='navbar__container'>
    <div className='navbar'>
      <div className='navbar__header' onClick={()=> history.push('/')}>
        <img
          className='navbar__icon'
          src="https://storage.cloudconvert.com/tasks/2ce73dd4-8275-4c29-8559-a6c7b034fa17/favicon.png?AWSAccessKeyId=cloudconvert-production&Expires=1616529905&Signature=felZrwrzq5PwIC06D4XNbw%2Fv%2B0w%3D&response-content-disposition=inline%3B%20filename%3D%22favicon.png%22&response-content-type=image%2Fpng"
          alt=''
          />
        <h2>skybnb</h2>
      </div>

      <div className='navbar__search'>
        <input type="text" placeholder="Start your search"/>
        <i class="fas fa-search"></i>
      </div>

      <div className='navbar__account'>
        <p onClick={() => history.push('/createspot')}>Become a host</p>
        <i class="fas fa-globe"></i>
        <div className='account__dropdown' onClick={() => toggle(!open)}>
          <i class="fas fa-bars"></i>
          <i class="fas fa-user-circle fa-2x"></i>
        </div>
      </div>
        {open && !authenticated && (
          <div className="dropdown__menu">
            <ul className='dropdown__list'>
            <LoginModal
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          ></LoginModal>
              <SignUpModal 
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}/>
              <p onClick={() => history.push('/createspot')}>Host your home</p>
            </ul>
          </div>
        )}
        {open && authenticated && (
          <div className="dropdown__menu">
            <ul className='dropdown__list'>
              <p onClick={() => history.push('/account')}>Account</p>
              <p onClick={() => history.push('/createspot')}>Host your home</p>
              <LogoutButton 
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}/>
            </ul>
          </div>
        )}
    </div>
    </div>
  );
}

export default NavBar;