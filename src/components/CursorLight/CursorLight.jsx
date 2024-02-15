import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import './CursorLight.scss';

const CursorLight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener('mousemove', (e) => { updatePosition(e) });
    return () => window.removeEventListener('mousemove', updatePosition);
  });

  // constantly rotate the circles
  useEffect(() => {
    gsap.to('.cursor-light__circle1', {
      rotation: 360,
      transformOrigin: 'center',
      repeat: -1,
      duration: 4,
      ease: 'none',
    });
    gsap.to('.cursor-light__circle2', {
      rotation: -360,
      transformOrigin: 'center',
      repeat: -1,
      duration: 4,
      ease: 'none',
    });
  }, []);

  useEffect(() => {
    gsap.to('.cursor-light', {
      css: {
        left: position.x + 'px',
        top: position.y + 'px',
      },
      ease: 'power3.out',
      duration: 0.3,
    });
  }, [position]);

  return (
    <div className="cursor-light">
      <div className="cursor-light__circle1"></div>
      <div className="cursor-light__circle2"></div>
    </div>
  );
}

export default CursorLight;
