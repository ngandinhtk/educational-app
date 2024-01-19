import React from 'react'
import Title from '../Common/Title/Title'
import {coursesCard} from '../../dummydata'
function HAbout() {
  return (
    <div>
      <div className="homeAbout">
         <div className="container">
            <Title subtitle='our course' title='explore our popular online courses' />
            <div className='coursesCard'>
         <div className="grid2">
            {coursesCard.slice(0,3).map((val) =>{
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
      </div>
         </div>
      </div>
    </div>
  )
}

export default HAbout