import React from 'react'
import profile from '../assets/profile.png'

export const About = () => {
  return (
    <div className='about-hero'>
        <div className='about'>
            <h1>About Me</h1>
        </div>
       <div className='about-section'>
       <div className='seaction-a'>
            <img src={profile} alt="" />
        </div>
        <div className='section-b'>
            <p>I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.</p>
        </div>
       </div>
    </div>
  )
}


export default About
