import React from 'react'
import "./bolby.css"
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



export default function Bolby() {
  return (
    <div>

      {/* main page  */}

    <div className='raghul'>
      

      <a href='#'className='hel'>Portfolia</a>

     <div className='tr'>
          <a href='#'className='service'>Home</a>
          <a href='#'className='service'>About</a>
          <a href='#'className='service'>Service</a>
          <a href='#'className='service'>Project</a>
          <a href='#'className='service'>Contact</a>
     </div>
     </div>
    {/* 1 st page */}   

    <div className='joe'>

        <img src='https://bolby-react.vercel.app/images/avatar-1.svg' alt='...' height={150} width={120}/>
        <h1 className='aa'> Raghul.V</h1>
        <p className='bb'>Iam Frontend Developer</p>
        <div className='sap'>
        <FaInstagramSquare className='colour'/>
        <BsTwitterX className='colour' />
        <FaLinkedin className='colour' />
        <FaFacebook className='colour'/>
        <FaWhatsapp className='colour'/>
        

        <br/>
        <button className='hr'>Hire me</button>
        </div>
    </div>
     



















    </div>
  )
}
