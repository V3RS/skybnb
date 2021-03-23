import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './Navbar.css'

const NavBar = ({ setAuthenticated }) => {
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    
    <div className='nav-bar'>
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
        <p>Become a host</p>
        <i class="fas fa-globe"></i>
        <div className='account__dropdown' onClick={() => toggle(!open)}>
          <i class="fas fa-bars"></i>
          <i class="fas fa-user-circle fa-2x"></i>
        </div>
      </div>
        {open && (
          <div className="dropdown__menu">
            <ul className='dropdown__list'>
              <p>Log in</p>
              <p>Sign up</p>
              <p>Host your home</p>
            </ul>
          </div>
        )}
    </div>
  );
}


// function DropDown() {

//   return (
//     <div className="dd-wrapper">
//       <div tabIndex={0} className="dd-header" role="button" onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}>
//         <div className="dd-header_title">
//           <p className="dd-header_title--bold">dropdown</p>
//         </div>
//         <div className="dd-header__action">
//           <p>{open ? 'Close' : 'Open'}</p>
//         </div>
//       </div>
//       {open && (
//         <ul className="dd-list">
//           <li>hey</li>
//           <li>wtf</li>
//         </ul>
//       )}
//     </div>
//   )
// }
export default NavBar;