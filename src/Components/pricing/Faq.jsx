 import React, { useState } from 'react'
import Title from '../Common/Title/Title'
import { faq } from '../../dummydata'
import $ from "jquery";


 function Faq() {
  // $(document).ready(function(){
  //   $(".accordion").click(function(){
  //     $(".text").slideToggle("slow");
  //   });
  // });

    const [click, setClick] = useState(false)
  


    const toggle = index => {
      if (click === index) {
        return setClick(null)
      } else {
        // $(".text").slideToggle();
        setClick(index)

      }
    }
   return (
     <div>
        <Title subtitle='FAQS' title='Frequesntly Ask Questions' />
        <section className='faq'>
          <div className="container">
            {faq.map((val, index) => (
              <div className="box">
                <button className='accordion' onClick={()=> toggle(index)} key={index}>
                  <h2>
                    {val.title}
                  </h2>
                  <span> {click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>} </span>
                </button>
              {click === index ? (
               
               <div className="text">
               <p>
                 {val.desc}
               </p>
             </div>

              ) : null}  

              </div>
            ))}
          </div>
        </section>
     </div>
   )
 }
 
 export default Faq