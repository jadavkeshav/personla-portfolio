import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
export default function Contact(props) {
  return (
    <div>
       <section id="contact">
      <p className="section__text__p1" style={props.decor}>Get in Touch</p>
      <h1 className="title" >Contact Me</h1>
      <div className="contact-info-upper-container" >
        <div className="contact-info-container">
          <MdOutlineEmail
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a  className='emailandphone' href="mailto:jadavkeshav2005@gmail.com"  style={props.decor}>jadavkeshav2005@gmail.com</a></p>
        </div>
        <div className="contact-info-container" >
          <IoCall
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a className='emailandphone' style={props.decor} href="https://www.linkedin.com">+91-8019833422</a></p>
        </div>
      </div>
    </section>
    </div>
  )
}
