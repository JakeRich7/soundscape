import React from "react";
import { useSelector } from "react-redux";
import './Logout.css';

function LogoutPage() {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
      {
        !sessionUser &&
        <div className="logout-message-main">
          You've signed out. Now go mobile!
          <img src="https://a-v2.sndcdn.com/assets/images/android-9946ba3b.svg" alt="logged out mobile ad" />
        </div>
      }
      {
        sessionUser &&
        <div className="logout-message-main">
          Logging you out...
        </div>
      }
    </>
  )
}

export default LogoutPage;
