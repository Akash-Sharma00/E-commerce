import React from 'react'
import './Fotter.css'
import footer_logo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import pinterest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Fotter = () => {
  return (
    <div className='fotter'>
      <div className="fotter-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="fotter-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="fotter-social-icons">
        <div className="fotter-icon-container">
            <img src={instagram} alt="" />
        </div>
        <div className="fotter-icon-container">
            <img src={pinterest} alt="" />
        </div>
        <div className="fotter-icon-container">
            <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="fotter-copyright">
        <hr />
        <p>Copyright @ 2023 all rights are reserved</p>
      </div>
    </div>
  )
}
export default Fotter
