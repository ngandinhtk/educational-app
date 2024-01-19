import React from 'react'
import Head from './Head'
import  './Header.css'
import { useState } from 'react';
import {  Link } from "react-router-dom";

function Header() {
  const [click, setClick] = useState(false)
  return (
    <div className='head-part'>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ?'mobile-nav' : 'flexSB'}  onClick={()=> setClick(false)} >
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/course">All Course</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/team">Team</Link> </li>
            <li> <Link to="/pricing">Pricing</Link> </li>
            <li> <Link to="/journal">Journal</Link> </li>
            <li> <Link to="/contact">Contact</Link> </li>
          </ul>
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={()=> setClick(!click)}>
            {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i> }
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Header