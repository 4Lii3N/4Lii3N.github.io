import React from 'react';
import './Cards.scss';

import Card from '@components/Card/Card.jsx';
import card1_bg from '@assets/card1_bg.png';


const Cards = () => {
  return (
    <div className="cards">
      <Card title="Card 1" description="This is card 1" index="1" img={card1_bg} />
      <Card title="Card 2" description="This is card 2" index="2" />
      <Card title="Card 3" description="This is card 3" index="3" />
    </div>
  );
}

export default Cards;
