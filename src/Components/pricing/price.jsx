import React from 'react'
import Back from '../Common/Back/Back'
import PriceCard from './PriceCard'
import './price.css'
import Faq from './Faq'

function price() {
  return (
    <>
      <Back title='Choose The Right Plan'/>
      <div className="marigin"></div>

      <section className='price padding'>
         <div className="container grid">
            <PriceCard/>
         </div>
      </section>
      <Faq />
    </>
  )
}

export default price