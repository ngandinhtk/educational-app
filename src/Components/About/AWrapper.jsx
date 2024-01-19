import React from 'react'
import { awrapper } from '../../dummydata'
function AWrapper() {
  return (
    <div>
      <section className='awrapper'>
        <div className="container grid">
          {awrapper.map((val, index)=>(
            <div key={index+1} className="box text-center flex">
              <div className="img">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
              </div>
              <div className="text">
                <h1>{val.data}</h1>
                <h2> {val.title} </h2>
              </div>
            </div>
          )) 
          }
        </div>
      </section>
    </div>
  )
}

export default AWrapper