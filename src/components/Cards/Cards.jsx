import React from 'react';
import './Cards.scss';

import Card from '@components/Card/Card.jsx';
import card1_bg from '@assets/card1_bg.png';
import card2_bg from '@assets/card2_bg.jpg';
import card3_bg from '@assets/card3_bg.jpg';


const Cards = () => {
  return (
    <div className="cards">
      <Card title="Card 1" description="This is card 1" index="1" img={card1_bg} />
      <Card title="Card 2" description="This is card 2" index="2" img={card2_bg} />
      <Card title="Card 3" description="This is card 3" index="3" img={card3_bg} />
    </div>
  );
}

export default Cards;
