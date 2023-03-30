import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import youtube from '../assets/youtube.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-img'>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={youtube} alt="" />
        </div>
        <div>
            <a href="">Info</a>
            <a href="">Support</a>
            <a href="">Marketing</a>
        </div>
        <div>
            <h5>@2023 Arden Flores</h5>
        </div>
    </div>
  )
}

export default Footer