import React from "react";
import './ErrorPage.css';

function ErrorPage() {
  return (
    <div className="error-page-main-div">
      <img className="error-image" src="https://a-v2.sndcdn.com/assets/images/404-339e640d.png" />
      <h2 className="error-title">We can't find that page.</h2>
      <div className="error-body-text">A report has been sent to our tech team, and they're looking into the problem. Please check back in a bit.</div>
    </div>
  )
}

export default ErrorPage;
