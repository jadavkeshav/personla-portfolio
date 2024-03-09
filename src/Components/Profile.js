import React from 'react';
import profile from './assets/profile-pic2.jpg';
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";

export default function Profile(props) {
  return (
    <div >
      <section id="profile" >
        <div className="section__pic-container">
          <img style={{borderRadius: '50%'}} src={profile} alt="JadavKeshav" />
        </div>
        <div className="section__text">
          <p className="section__text__p1" style={props.decor} >Hello, I'm</p>
          <h1 className="title" style={props.decor}>Jadav Keshav</h1>
          <p className="section__text__p2" style={props.decor} >Web Developer</p>
          <div className="btn-container">
            <button
              style={props.decor}
              className="btn btn-color-2"
              onClick={() => { window.open('./assets/resume-expample.pdf') }}
            >
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={() => { window.location.href = './#contact' }}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            
            <FaLinkedin className="icon"
              onClick={() => { window.location.href = 'https://www.linkedin.com/in/jadav-keshav-829293178' }}/>
            <VscGithub style={{ fontSize: '30px' }} className="icon" onClick={() => { window.location.href = 'https://github.com/jadavkeshav' }} />
            <SlSocialInstagram  style={{ fontSize: '30px' }} className="icon" onClick={() => { window.location.href = 'https://instagram.com/jadavkeshav_' }} />
            
           
          </div>
        </div>
      </section>
    </div>
  )
}
