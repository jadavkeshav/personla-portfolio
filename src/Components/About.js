import React from 'react';
import abt from './assets/about-pic.png'
import edu from './assets/education.png'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
export default function About(props) {
  return (
    <div>
      <section id="about" >
      <p className="section__text__p1" style={props.decor}>Get To Know More</p>
      <h1 className="title" style={props.decor}>About Me</h1>
      <div className="section-container">
        {/* <div className="section__pic-container">
          <img
            src={abt}
            alt="Profile"
            className="about-pic"
          />
        </div> */}
        <div className="about-details-container" >
          <div className="about-containers" >
            
            <div className="details-container"  style={{background: `${props.darkMode? '#BB86FC': '#fff'}`}}>
              <img
                src={edu}
                alt="Education icon"
                className="icon"
              />
              <h3 style={{color : `${props.darkmode ? "white":"black"}`}}>Education</h3>
              <p style={{color : `${props.darkmode ? "white":"black"}`}}>B.Tech Computer Science Eng.<br /></p>
            </div>
          </div>  
          <div className="text-container">
            <p style={props.decor}>
            Passionate and results-driven Computer Science professional specializing in Web Development, proficient in the MERN stack. With a proven track record, I secured the second prize in a hackathon, showcasing my ability to deliver innovative and effective solutions  in the realm of web development.
            </p>
          </div>
        </div>
      </div>
      <MdKeyboardDoubleArrowDown
        className="icon arrow"
        style={{fontSize: '30px'}}
        onClick={()=>{window.location.href='./#experience'}}
      />
      
    </section>
    </div>
  )
}
