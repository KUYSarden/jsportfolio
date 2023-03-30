import React from 'react'
import hello from '../assets/hello.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='h1'>
        <h1>Love to hear from you,</h1>
        <h1>Get in touch <span><img src={hello} alt="" /></span></h1>
      </div>
      <div className='box'>
      <div>
        <h3>Your name</h3>
        <input type="text" />
        <h3>What are you interested in</h3>
        <input type="text" />
      </div>
      <div>
        <h3>Your email</h3>
        <input type="email" name="" id="" />
        <h3>Project Budget</h3>
        <input type="text" />

      </div>
      </div>
      <div className='textbox'>
        <h3>Message</h3>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <a href="">send</a>
    </div>
  )
}

export default Contact