import React from 'react'
import { price } from '../../dummydata'

function PriceCard() {
  return (
    <>
      {price.map((e)=> (
         <div className="items shadow">
           <h4> {e.name} </h4>
           <h1>
            <span>$</span>
            {e.price}
           </h1>
           <p>
            {e.desc}
           </p>
           <button className='online-btn'>GET STARTED</button>
         </div>
      ))}

    </>
  )
}

export default PriceCard