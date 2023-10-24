import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>

        <div className="hero-left">
            <h2>New Arrivals only</h2>
            <div className="hero-hand-icon">
                <p>New</p>
                <img src={hand_icon} alt="Icon" />
            </div>
            <p>Collection</p>
            <p>For everyone</p>
        <div className="hero-latest-button">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="Icon" />
        </div>
        </div>
        <div className="hero-right"></div>
      <img src={hero_img} alt="" />
    </div>
  )
}

export default Hero
