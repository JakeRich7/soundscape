import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import * as sessionActions from '../../store/session';
import * as songActions from '../../store/songs';
import { useDispatch } from 'react-redux';

function Navigation({ isLoaded }) {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sessionActions.login({ credential: "Demo-lition", password: "password" }));
    dispatch(songActions.getAll());
    return;
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='auth-buttons'>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <button onClick={handleSubmit}>demouser</button>
      </div>
    );
  }

  return (
    <ul className='navigation-bar'>
      <li>
        <div className='home-button'>
          <NavLink exact to="/">Home</NavLink>
        </div>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
