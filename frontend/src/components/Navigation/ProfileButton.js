import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Link } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    dispatch(sessionActions.logout());
  };

  return (
    <div className="profile-area">
      <div className="profile-button-div">
        <button onClick={openMenu} className="profile-button">
          <i className="fas fa-user-circle" />
        </button>
      </div>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className="profile-name">{user.username}</li>
          <li>
            <Link to="/logout" className="profile-logout-button" onClick={logout}>Log Out</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
