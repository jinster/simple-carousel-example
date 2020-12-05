import React, { useState } from "react";
import "./styles.css";

const slides = ['https://picsum.photos/800/600' , 'https://picsum.photos/800/601', 'https://picsum.photos/801/600',  'https://picsum.photos/802/600', 'https://picsum.photos/200/400']

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const count = slides.length;

  const left = currentSlide === 0 ? count - 1 : currentSlide - 1;
  const right = currentSlide === count - 1 ? 0 : currentSlide + 1;

  return (
    <div className="App">
      <div className="carousel">
        <div className="leftImage">
          <div className="overlay" />
          <img className="image" src={slides[left]} />
        </div>
        <div className="centerImage">
          <div className="button left">
            <button className="arrow" onClick={() => setCurrentSlide(left)}>{'<'}</button>
          </div>
          <img className="image" src={slides[currentSlide]} />
          <div className="button right"> 
              <button className="arrow" onClick={() => setCurrentSlide(right)}>{'>'}</button>
            </div>
        </div>
        <div className="rightImage">
          <div className="overlay" />
          <img className="image" src={slides[right]} />
        </div>
      </div>
    </div>
  );
}
