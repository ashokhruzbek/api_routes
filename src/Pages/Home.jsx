import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Home.css';

function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 60, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.6,
        ease: "power3.out"
      }
    );
  }, []);

  return (
    <div className="home-container">
      <h1 ref={titleRef} className="home-title">WELCOME TO 416</h1>
    </div>
  );
}

export default Home;
