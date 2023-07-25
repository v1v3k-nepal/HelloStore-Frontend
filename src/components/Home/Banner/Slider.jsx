import "./Slider.scss";
import Slide1 from "../../../assets/slide1.webp";
import Slide2 from "../../../assets/slide2.webp";
import Slide3 from "../../../assets/slide3.webp";
import Slide4 from "../../../assets/slide4.webp";
import Slide5 from "../../../assets/slide5.webp";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideImg = [Slide1, Slide2, Slide3, Slide4, Slide5];


  const navigateSlider = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      <div className="slide">
        {slideImg.map((img) => (
          <>
            <img src={img} alt="" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}/>
            <div className="btn-container">
              {slideImg.map((img, index) => (
                <button onClick={() => navigateSlider(index) } className={`btn ${currentSlide==index ? "active": ""} `}></button>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Slider;
