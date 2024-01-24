import React from 'react'
import CourseCard from './CourseCard'
import Back from '../Common/Back/Back'
import OnlineCourse from './OnlineCourse'

function CourseHome() {
  return (
    <div>
      <Back title='Explore Courses'></Back>
      <div className="marigin"></div>
      <CourseCard/>
      <OnlineCourse />
    </div>
  )
}

export default CourseHome