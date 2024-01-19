import React from 'react'
import Title from '../Common/Title/Title'
import './about.css'
import { homeAbout } from '../../dummydata'
import AWrapper from './AWrapper'
function AboutCard() {
  return (
    <div>
      <section className='aboutHome'>
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about.webp" alt="" />
          </div>
          <div className="right row">
            <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className="items">
              {homeAbout.map((val, i)=>
              ( 
                <div key={i+1} className="item flexSB" > 
                  <div className="img"key={val.id}  >
                      <img  src={val.cover} alt="" />
                    </div>
                  <div className="text">
                      <h2> {val.title}  </h2>
                      <p>{val.desc}</p>
                  </div>
                </div>
              ) 
              )}
            </div>
          </div>
        </div>
      </section>
      <AWrapper/>
    </div>
  )
}

export default AboutCard