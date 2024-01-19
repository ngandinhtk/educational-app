import React from 'react'
import { coursesCard } from '../../dummydata'
import "./courses.css"
function CourseCard() {
  return (
    <div>
      <section className='coursesCard'>
         <div className="container grid2">
            {coursesCard.map((val) =>{
               return (
                  <div className="items">
                     <div className="content flex">
                        <div className="left">
                           <div className="img">
                              <img src={val.cover} alt="" />
                           </div>
                           <div className="text">
                              <h1>{val.coursesName}</h1>
                              <div className="rate">
                                 <i className='fa fa-star'></i>
                                 <i className='fa fa-star'></i>
                                 <i className='fa fa-star'></i>
                                 <i className='fa fa-star'></i>
                                 <i className='fa fa-star'></i>
                                 <label htmlFor="">(5.0)</label>
                              </div>
                              <div className="details">
                                 {val.courTeacher.map((detail)=> (
                                    <div className="box">
                                       <div className="dimg">
                                          <img src={detail.dcover} alt="" />
                                       </div>
                                       <div className="para">
                                          <h4>{detail.name}</h4>
                                       <span>{detail.totalTime}</span>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="price">
                        <h3> {val.priceAll} / {val.pricePer}</h3>
                     </div>
                     <button className="online-btn">ENROLL NOW!</button>
                  </div>
               )
               }
               )}
         </div>
      </section>
    </div>
  )
}

export default CourseCard