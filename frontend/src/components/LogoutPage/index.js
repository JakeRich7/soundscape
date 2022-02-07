import React from "react";
import { useSelector } from "react-redux";

function LogoutPage() {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
      {
        !sessionUser &&
        <div>
          Why did you log out???
        </div>
      }
      {
        sessionUser &&
        <div>
          Use the profile button to log out
        </div>
      }
    </>
  )
}

export default LogoutPage;
