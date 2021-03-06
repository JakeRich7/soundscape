import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import soundscapeIcon from './soundscape-icon.png';

function Navigation({ isLoaded }) {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);

  const handleSubmit = async (e) => {
    await dispatch(sessionActions.login({ credential: "Demo-lition", password: "password" }));
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div>
          <NavLink className='library-button' to="/library">Library</NavLink>
          <NavLink className='upload-button' to="/upload">Upload</NavLink>
        </div>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <div className='auth-buttons'>
        <NavLink className='login-button' to="/login">Log In</NavLink>
        <NavLink className='signup-button' to="/signup">Sign Up</NavLink>
        <Link to='/discover' className='demouser-button' onClick={handleSubmit}>Demo User</Link>
      </div>
    );
  }

  return (
    <ul className='navigation-bar'>
      <li>
        <div className='home-logo'>
          <NavLink exact to="/">
            <img className='soundscape-icon' src={soundscapeIcon} alt="soundscape icon" />
          </NavLink>
          <NavLink className="home-button" exact to="/"><div>Home</div></NavLink>
          <NavLink className="about-button" exact to="/about"><div>About</div></NavLink>
        </div>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
