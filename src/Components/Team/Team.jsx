import React from 'react'
import Back from '../Common/Back/Back'
import TeamCard from '../Team/TeamCard'
import '../Team/team.css'

function Team() {
  return (
    <div>
      <Back title='Team'/>
      <div className="marigin"></div>
      <section className='team padding'>
        <div className="container grid">
          <TeamCard/>
        </div>
      </section>
    </div>
  )
}

export default Team