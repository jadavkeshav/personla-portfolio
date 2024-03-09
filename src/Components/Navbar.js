import React from 'react';

export default function Navbar(props) {
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(`.hamburger-icon${props.darkMode ? "-dark" : ""}`);
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  return (
    <>
      <div>
        <nav id="desktop-nav" >
          <div className="logo">JadavKeshav</div>
          <div>
            <ul className="nav-links">
              <li><a href="#about" style={props.decor}>About</a></li>
              <li><a href="#experience" style={props.decor}>Skills</a></li>
              <li><a href="#projects" style={props.decor}>Projects</a></li>
              <li><a href="#contact" style={props.decor}>Contact</a></li>
            </ul>
          </div>
        </nav>
        <nav id="hamburger-nav" >
          <div className="logo">JadavKeshav</div>
          <div className="hamburger-menu" >
            <div className={`hamburger-icon${props.darkMode ? "-dark" : ""}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="menu-links" style={props.decor} >
              <li><a href="#about" onClick={toggleMenu} style={props.decor}>About</a></li>
              <li><a href="#experience" onClick={toggleMenu} style={props.decor}>Skills</a></li>
              <li><a href="#projects" onClick={toggleMenu} style={props.decor}>Projects</a></li>
              <li><a href="#contact" onClick={toggleMenu} style={props.decor}>Contact</a></li>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
