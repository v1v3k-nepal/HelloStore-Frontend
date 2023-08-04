import "./Slider.scss";
import Slide1 from "../../../assets/slide1.webp";
import Slide2 from "../../../assets/slide2.webp";
import Slide3 from "../../../assets/slide3.webp";
import Slide4 from "../../../assets/slide4.webp";
import Slide5 from "../../../assets/slide5.webp";
import React, { useState } from "react";
import {useSwipeable } from "react-swipeable";
import {MdNavigateBefore, MdNavigateNext} from "react-icons/md"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideImg = [Slide1, Slide2, Slide3, Slide4, Slide5];

  const navigateSlider = (index) => {
    setCurrentSlide(index);
  };

  const slideLeft = ()=>{
    (currentSlide > 0) ? setCurrentSlide((prevValue)=> prevValue - 1) : setCurrentSlide(slideImg.length - 1);
  }

  const slideRight = ()=>{
    (currentSlide < (slideImg.length - 1)) ? setCurrentSlide((prevValue)=> prevValue + 1) : setCurrentSlide(0);
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft : ()=> slideRight(),
    onSwipedRight : ()=> slideLeft()
  })

  return (
    <div className="slider-container" {...swipeHandlers}>
      {slideImg.map((img, index) => (
        <div key={index} className="slide">
          <img src={img} alt="" style={{ transform: `translateX(-${currentSlide * 100}vw)` }} />
          <div className="slide-btn">
            <button className="left-slide" onClick={()=> slideLeft()}><MdNavigateBefore/></button>
            <button className="right-slide" onClick={()=> slideRight()}><MdNavigateNext/></button>
          </div>
          <div className="btn-container">
            {slideImg.map((img, index) => (
              <button key={index} onClick={() => navigateSlider(index)} className={`btn ${currentSlide === index ? "active" : ""} `}></button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
