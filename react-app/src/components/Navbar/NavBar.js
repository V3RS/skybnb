import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Navbar.css'
import LoginModal from '../LoginModal'
import SignUpModal from '../SignupModal'
import LogoutButton from '../auth/LogoutButton'
import logo from "./logo.png"
import * as spotslistActions from '../../store/spotslist'

const NavBar = ({ authenticated, setAuthenticated }) => {
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const toggle = () => setOpen(!open)
  const toggleSearch = () => setOpenSearch(!openSearch)
  const dispatch = useDispatch()




  const handleSubmit = (e) => {
    console.log('test')
    e.preventDefault();
    history.push('/spotslistpage')
    return dispatch(spotslistActions.spotslistSearch(searchQuery))
  }

  return (
    <div className='navbar__container'>
    <div className='navbar'>
      <div className='navbar__header' onClick={()=> history.push('/')}>
        <img
          className='navbar__icon'
          src={logo}
          alt=''
          />
        <h2>skybnb</h2>
      </div>

      {!openSearch && (
      <div className='navbar__search'>
        <button onClick={() => toggleSearch(!openSearch)}>Start your search</button>
        <i class="fas fa-search"></i>
      </div>
      )}
      {openSearch && (
        <form onSubmit={(e) => handleSubmit(e)} className="search__form" method="POST">
          <div className="searchform__container">
            <button className='searchform__cancel' onClick={() => toggleSearch(!openSearch)}><i class="far fa-times-circle fa-2x"></i></button>
            <div className='location__container'>
              <label>Location</label>
              <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
              type='text'></input>
            </div>
            <div className='guests__container'>
              <label>Guests</label>
              <input type='number'></input>
            </div>
            <button className='searchform__button' type='submit'><i className="fas fa-search"></i></button>
          </div>
        </form>
      )}
      <div className='navbar__account'>
        <p onClick={() => history.push('/createspot')}>Become a host</p>
        <i class="fab fa-github" onClick={() => window.location.href='https://github.com/V3RS/skybnb'}></i>
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