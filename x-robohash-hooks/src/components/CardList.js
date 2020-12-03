import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      { 
      robots.map(robot => 
        <Card 
          name={robot.name} 
          id={robot.id} 
          email={robot.email} 
          key={robot.id} 
        />)
      }
    </div>
  );
};

export default CardList;