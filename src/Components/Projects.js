import React from 'react'
import prj from "./assets/project-1.png"
import prj2 from "./assets/project-2.png"
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
export default function Projects(props) {
  return (
    <div>
      <section id="projects">
      <p className="section__text__p1" style={props.decor}>Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container" >
        <div className="about-containers"  >
          <div className="details-container color-container" style={{background: `${props.darkMode? '#BB86FC': '#fff'}`}}>
            <div className="article-container" >
              <img
                src={prj}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title" >Nyaay Sahayak</h2>
            <div className="btn-container">
              <button style={props.decor}
                className="btn btn-color-2 project-btn"
                onClick={()=>{window.location.href='https://github.com/NyaaySahayak/frontend/tree/main'}}
              >
                Github
              </button>
              <button style={props.decor}
                className="btn btn-color-2 project-btn"
                onClick={()=>{window.location.href='https://github.com/NyaaySahayak/frontend/tree/main'}}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container" style={{background: `${props.darkMode? '#BB86FC': '#fff'}`}}>
            <div className="article-container" >
              <img
                src={prj2}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title" >Coming soon</h2>
            <div className="btn-container">
              <button style={props.decor}
                className="btn btn-color-2 project-btn"
                onClick={()=>{window.location.href='https://github.com/jadavkeshav'}}
              >
                Github
              </button>
              <button style={props.decor}
                className="btn btn-color-2 project-btn"
                onClick={()=>{window.location.href='https://github.com/jadavkeshav'}}
              >
                Live Demo
              </button>
            </div>
          </div>
                   
        </div>
      </div>
      < MdKeyboardDoubleArrowDown
        className="icon arrow"
        onClick={()=>{window.location.href='./#contact'}}
      />
    </section>
    </div>
  )
}
