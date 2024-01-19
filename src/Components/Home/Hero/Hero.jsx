import React from 'react'
import './Hero.css'
import Title from '../../Common/Title/Title'
function Hero() {
  return (
    <div>
      <section className='hero' name="" id="">
         <div className="container">
            <div className="row">
               <Title subtitle="WELCOME TO ADCAEMIA" title='Best Online Education' />
               <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusantium provident molestiae in quidem! Alias, quo. Expedita aperiam harum possimus corporis. Aut minus ipsam cumque quas amet ut, assumenda harum.
               </p>
               <div className="button">
                  <button className="primary-btn">
                     GET STARTED NOW   <i className='fa fa-long-arrow-alt-right'></i>
                  </button>
                  <button className="white-btn">
                     VIEW COURSE   <i className='fa fa-long-arrow-alt-right'></i>
                  </button>
               </div>
            </div>
         </div>
      </section>
      <div className="margin">

      </div>
    </div>
  )
}

export default Hero