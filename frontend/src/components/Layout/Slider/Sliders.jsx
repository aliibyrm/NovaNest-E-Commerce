import { useState } from "react";
import SliderItem from "./SliderItem";
import "./Sliders.css";

const Sliders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  return (
    <section className="slider">
      <div className="slider-elements">
        {currentSlide === 0 && <SliderItem imageSrc="     https://www.apple.com/newsroom/images/tile-images/Apple_keynote_event_tim-cook-opens-september-keynote_091019.jpg.landing-big_2x.jpg"/>}
   
        {currentSlide === 1 && <SliderItem imageSrc="https://img.global.news.samsung.com/global/wp-content/uploads/2019/04/A-Galaxy-Event_Bangkok_main_1.jpg" />}
       
        {currentSlide === 2 && <SliderItem imageSrc="https://english.news.cn/20230227/b4bd9daffc9146b3af689d8bcefe0fa6/20230227b4bd9daffc9146b3af689d8bcefe0fa6_202302275b6428241fa046a8b8f1dae44967f2b4.jpg" />}
        <div className="slider-buttons">
          <button onClick={prevSlide}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button onClick={nextSlide}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <div className="slider-dots">
          <button
            className={`slider-dot ${currentSlide === 0 ? "active" : ""}`}
            onClick={() => setCurrentSlide(0)}
          >
            <span></span>
          </button>
          <button
            className={`slider-dot ${currentSlide === 1 ? "active" : ""}`}
            onClick={() => setCurrentSlide(1)}
          >
            <span></span>
          </button>
          <button
            className={`slider-dot ${currentSlide === 2 ? "active" : ""}`}
            onClick={() => setCurrentSlide(2)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sliders;