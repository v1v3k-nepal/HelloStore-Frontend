import React from 'react'
import "./Newsletter.scss"
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa"

const Newsletter = () => {
  return (
    <div className='newsletter-section'>
      <div className="newsletter-content">

        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign Up for Latest Updates and Offers</span>

        <div className="form">
          <input type="text" placeholder="Email Address"/>
          <button>Subscribe</button>
        </div>

        <div className="text">Will be used in accordance with our Privacy Policy</div>

        <div className="social-icons">
            <div className="icon"><FaFacebookF/></div>
            <div className="icon"><FaTwitter/></div>
            <div className="icon"><FaInstagram/></div>
            <div className="icon"><FaLinkedin/></div>
          </div>
      </div>
    </div>
  )
}

export default Newsletter;
