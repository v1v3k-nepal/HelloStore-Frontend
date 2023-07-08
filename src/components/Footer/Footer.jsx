import React from 'react'
import "./Footer.scss"
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa"
import Payment from "../../assets/payments.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">

        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore inventore deleniti soluta 
            consectetur, ipsam rem voluptates aut quis perferendis non repudiandae aspernatur necessitatibus, provident tempora, 
            quaerat culpa nostrum laboriosam sit.
          </div>
        </div>

        <div className="col">
          <div className="title">Contact</div>

          <div className="c-item">
            <FaLocationArrow/>
            <div className="text">Sundhara Rd, Babarmahal, Sahid Gate, Sundhara, Kathmandu, 44600</div>
          </div>

          <div className="c-item">
            <FaMobileAlt/>
            <div className="text">Phone: 01-525 0261</div>
          </div>

          <div className="c-item">
            <FaEnvelope/>
            <div className="text">Email: store@hellostore.com.np</div>
          </div>
        </div>

        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>

        <div className="col">
          <div className="title">Pages</div>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>

      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">HELLOSTORE 2023 Coded With Love By <a href="https://viveknepal.com.np">Vivek Nepal</a></span>
          <img src={Payment} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer;
