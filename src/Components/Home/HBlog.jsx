import React from 'react'
import Title from '../Common/Title/Title'
import { blog } from '../../dummydata'

function HBlog() {
  return (
    <div>
      <section className='blog'>
         <div className="container">
            <Title subtitle='Our Blog'  title='recent from blog'/>
            <div className="grid2">
               {blog.slice(0,3).map((e)=> {
                  return (
                     <div className="items shadow">
                        <div className="img">
                           <img src={e.cover} alt="" />
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
      </section>
    </div>
  )
}

export default HBlog