import React from 'react';
import './Cards.css';

const Cards = ({ icon, title, value, isPercentage }) => {
  console.log("title",title)
  return (
    <div className="card">
      <div className="card-icon">
        {icon}
      </div>
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-value">
          {value}
          {isPercentage && <span className="percentage-symbol">%</span>}
          <div className="card-more">
        <button className="more-button">{">"}</button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
