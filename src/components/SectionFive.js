import React, { useEffect, useRef } from "react";
import "../css/section_five.css";

const InfiniteSlider = () => {
  const trackRef = useRef(null);
  const animationFrameId = useRef(null);
  const pos = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const slides = Array.from(track.children);
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      track.appendChild(clone);
    });

    const halfWidth = track.scrollWidth / 2;
    const speed = 0.5;

    const animate = () => {
      pos.current -= speed;

      if (pos.current <= -halfWidth) {
        pos.current += halfWidth;
      }

      track.style.transform = `translateX(${pos.current}px)`;

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <section id="section-five">
      <div className="slider">
        <div className="slide-track" ref={trackRef}>
          <div className="slide">
            <i className="ri-gemini-fill"></i>THE VAPE LABS
          </div>
          <div className="slide">
            <i className="ri-gemini-fill"></i>THE VAPE LABS
          </div>
          <div className="slide">
            <i className="ri-gemini-fill"></i>THE VAPE LABS
          </div>
          <div className="slide">
            <i className="ri-gemini-fill"></i>THE VAPE LABS
          </div>
          <div className="slide">
            <i className="ri-gemini-fill"></i>THE VAPE LABS
          </div>
          <div className="slide">
            <i className="ri-gemini-fill"></i>THE VAPE LABS
          </div>
          <div className="slide">
            <i className="ri-gemini-fill"></i>THE VAPE LABS
          </div>
          <div className="slide">
            <i className="ri-gemini-fill"></i>THE VAPE LABS
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteSlider;
