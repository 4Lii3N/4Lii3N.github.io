import React, { useEffect, useState, useRef } from 'react';
import './Card.scss';
import useMousePosition from '@utils/useMousePosition';

const Card = ({ title, description, index, img }) => {
  const position = useMousePosition();
  const [relativePosition, setRelativePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setRelativePosition({
      x: (position.x - rect.left) | 0,
      y: (position.y - rect.top) | 0
    });
  }, [position]);

  return (
    <div ref={cardRef} className='card' style={{ "--mouse-x": relativePosition.x + "px", "--mouse-y": relativePosition.y + "px", "--img": "url(" + img + ")" }} id={"card" + index}>
      <div className='card__content'>
        <div className='card__content__text'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
