import React from 'react'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaHtml5, FaCss3 , FaReact , FaNodeJs , FaPython  , FaJava  } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
export default function Experience(props) {
  return (
    <div>
       <section id="experience" >
      <p className="section__text__p1" style={props.decor}>Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container"  >
        <div className="about-containers" style={{color : `${props.darkmode ? "white":"black"}`}} >
          <div className="details-container"  style={{background: `${props.darkMode? '#BB86FC': '#fff'}`}}>
            <div className="article-container">
              <article >
                < FaHtml5
                  alt="Experience icon"
                  className="icon"
                />
                <div >
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <FaCss3 
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              
              <article>
                <IoLogoJavascript
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <FaNodeJs 
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>NodeJs</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <FaReact
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <SiExpress
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <BiLogoMongodb
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>MongoDB</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <FaPython 
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Python</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <FaJava  
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Java</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <GrMysql  
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>MySQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <FaGitAlt
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          
        </div>
      </div>
      <MdKeyboardDoubleArrowDown
        className="icon arrow"
        style={{fontSize: '30px'}}
        onClick={()=>{window.location.href='./#projects'}}
      />
    </section>
    </div>
  )
}
