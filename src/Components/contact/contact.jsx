import React from 'react'
// import Title from '../Common/Title/Title'
import Back from '../Common/Back/Back'
import './contact.css'
function contact() {
  // const data = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31350.01421585845!2d106.79494406586193!3d10.83029829834549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1706086104900!5m2!1sen!2s'
  return (
    <>
      <Back title='Contact Us' />
      <div className="marigin"></div>

      <section className='contact padding'> 
        <div className="container shadow flexSB">
          <div className="left row">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31350.01421585845!2d106.79494406586193!3d10.83029829834549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1706086104900!5m2!1sen!2s" width="600" height="450"   loading="lazy" ></iframe>
          </div>
          <div className="right row">
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rerum perspiciatis et aperiam distinctio praesentium esse ipsam accusamus officiis voluptate iusto explicabo doloremque possimus asperiores id mollitia, molestias atque! Sed?</p>
            <div className="items grid2">
              <div className="box"><h4>
                ADDRESS: </h4>
                <p>198 West 12st street, suite 751 New York NY 1006</p>
                
                </div>
                <div className="box"><h4>
                Email: </h4>
                <p>Info@gmail.com</p>
                
                </div>
                <div className="box"><h4>
                PHONE: </h4>
                <p>+123 443 4885</p>
                
                </div>
            </div>
            <div className="form">
              <form action="" method="get">
                <div className="flexSB">

                <input type="text" name="" placeholder='Name' id="" />
                <input type="email" name="" placeholder='Email' id="" />
                </div>
                <input type="email" name="" id="" />
                <textarea name="" id="" cols="30" rows="10">
                  Create a massage here...
                </textarea>
                <button className='primary-name '> SEND MASSAGE </button>
              </form>
              <h3>Follow us here</h3>
              <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
            </div>
          </div>
        </div>
       </section>
    </>
  )
}

export default contact