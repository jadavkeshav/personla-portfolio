import React from 'react'

export default function Footer(props) {
  return (
    <div>
       <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a  style={props.decor} href="#about">About</a></li>
            <li><a  style={props.decor} href="#experience">Experience</a></li>
            <li><a  style={props.decor} href="#projects">Projects</a></li>
            <li><a  style={props.decor} href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2024 Jadav Keshav. All Rights Reserved.</p>
    </footer>
    </div>
  )
}
