import React from 'react'
import "./Banner.scss"
import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
  return (
    <div className='hero-banner'>
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptate 
            sed consequatur, ipsum dolor sit amet. 
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img src={BannerImg} className='banner-img' alt="" />
      </div>
    </div>
  )
}

export default Banner;
