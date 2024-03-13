import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0); {/*start at index 0*/}
  const {name,job,image,text} = people[index]
  console.log(people);
  return(
    <article className='review'>
        <div className="img-container">
              <img 
              src={image}
              alt={name} 
              className='person-img' 
              />
              <span className='quote-icon'>
                 <FaQuoteRight />
              </span>
        </div>
        {/*End of container*/}
        <h4 className='author'>{name}</h4> 
    </article>
  )
};

export default Review;