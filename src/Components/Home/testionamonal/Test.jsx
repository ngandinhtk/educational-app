import React from 'react'
import Title from '../../Common/Title/Title'
import { testimonal } from '../../../dummydata'
import './style.css'

function Test() {
  return (
    <>
      <section className='testimomal padding'>
         <div className="container">
            <Title subtitle='testimonal flex' title='our successful Student' />
            <div className="content grid2">

              {testimonal.map((el)=> (
                <div className="items ">
                  <div className="img">
                    <img src={el.cover} alt="" />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className="name">
                    <h2> {el.name} </h2>
                    <span> {el.post} </span>
                  </div>
                  <p> {el.desc} </p>
                </div>
              ))}
            </div>
         </div>
      </section>
    </>
  )
}

export default Test