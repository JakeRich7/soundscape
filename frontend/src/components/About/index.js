import React from "react";
import './About.css';
import jakeimage from './jake-about.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function About() {
  return (
    <div className='about-div'>
      <img className='jake-image' src={jakeimage} alt='pic of me' />
      <div className='about-me'>I love to code, play music, eat, sleep, workout, hike, and birdwatch! I feel especially passionate about educating people on how to raise their quality of life and boldly pursue their dreams.</div>
      <div className='about-links'>
        <a className='github' href='https://github.com/JakeRich7/soundscape' target="_blank" rel="noreferrer"><FaGithub size={70} color='white' /></a>
        <a className='linkedin' href='https://www.linkedin.com/in/jacob-richardson-73440518/' target="_blank" rel="noreferrer"><FaLinkedin size={70} color='blue' /></a>
      </div>
    </div>
  );
}

export default About;
