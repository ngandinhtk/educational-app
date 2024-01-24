import React from 'react'
import Back from '../Common/Back/Back'
import BlogCard from './BlogCard'
import './blog.css'

function blog() {
  return (
    <div>
      <Back title='Blog Posts' />
      <div className="marigin"></div>
       <section className='blog padding'>
          <div className="container grid2">
            <BlogCard/>
          </div>
       </section>
    </div>
  )
}

export default blog