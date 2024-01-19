import React from 'react'
// import { BrowserRouter as Router, Route } from "react-router-dom";

function Head() {
  return (
    <div>
      <section className='head'>
         <div className="container flexSB">
            <div className="logo">
               <h1>ACADEMIA</h1>
               <span>ONLINE EDUCATIONAL & LEARNING</span>
            </div>

            <div className="social">
               <i className='fab fa-facebook-f icon'> </i>
               <i className='fab fa-instagram icon'> </i>
               <i className='fab fa-twitter icon'> </i>
               <i className='fab fa-youtube icon'> </i>
            </div>
         </div>
      </section>
    </div>
  )
}

export default Head