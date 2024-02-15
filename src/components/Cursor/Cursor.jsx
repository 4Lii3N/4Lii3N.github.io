import React, { useState, useEffect } from 'react';
import './Cursor.scss';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener('mousemove', (e) => updatePosition(e));
    return () => window.removeEventListener('mousemove', updatePosition);
  });

  return (
    <div className="cursor" style={{ left: position.x, top: position.y }}></div>
  );
}

export default Cursor;
