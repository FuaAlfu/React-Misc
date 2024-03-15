import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0); {/*start at index 0*/}
  const {name,job,image,text} = people[index]
  const checkNumber = (number) => {
    if(number > people.length -1){
      return 0;
    }
    if(number < 0){
      return people.length -1;
    }
    return number;
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex);
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex);
    })
  }
  const randomPerson = () => {
   // console.log(Math.random()); //for testing
   let random = Math.floor(Math.random() * people.length);
   if(random === index){
    random = index + 1;
   }
   setIndex(checkNumber(random));
  }
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
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className="button-container">
            <button className='prev-btn' onClick={prevPerson}>
                <FaChevronLeft/>
            </button>
            {/*End Of Btn*/} 
            <button className='next-btn' onClick={nextPerson}>
                <FaChevronRight/>
            </button>
            {/*End Of Btn*/} 
            <button className='random-btn' onClick={randomPerson}>
                Wild Guess
            </button>
            {/*End Of Btn*/} 
        </div>
    </article>
  )
};

export default Review;