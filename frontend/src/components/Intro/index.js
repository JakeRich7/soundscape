import React from "react";
import './Intro.css';
import { Link } from "react-router-dom";

function Library() {

  return (
    <>
      <div className="intro-main-div">
        <div className="intro-main-content">
          <h2 className="intro-main-quote">What's next in music is first on Soundscape</h2>
          <h5 className="intro-secondary-quote">Upload your first track and begin your journey. Soundscape gives you space to create and to explore.</h5>
          <Link to="/signup" className="intro-redirect-button" >Get Started Today</Link>
        </div>
      </div>
    </>
  )
}

export default Library;
