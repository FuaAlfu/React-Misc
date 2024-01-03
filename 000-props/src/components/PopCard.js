import React from 'react';
import '../index.css'; 

const PopCard = ({ title, description }) => {
return (
 <div className="pop-card">
   <h2>{title}</h2>
   <p>{description}</p>
 </div>
 );
};

export default PopCard;