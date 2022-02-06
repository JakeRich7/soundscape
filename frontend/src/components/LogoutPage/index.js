import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function LogoutPage() {
  const sessionUser = useSelector(state => state.session.user);

  console.log('eyeyeeyeye')

  // if (sessionUser) return (
  //   <Redirect to="/" />
  // );

  return (
    <div>
      Why did you log out???
    </div>
  )
}

export default LogoutPage;
