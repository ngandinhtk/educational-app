import React from 'react'
import CourseCard from './CourseCard'
import Back from '../Common/Back/Back'

function CourseHome() {
  return (
    <div>
      <Back title='Explore Courses'></Back>
      <div className="marigin"></div>
      <CourseCard/>
    </div>
  )
}

export default CourseHome