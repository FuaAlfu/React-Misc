import React, { useState, useEffect } from 'react';
import data from '../data.json';

const DynamicHeader = () => {
  const [randomSentence, setRandomSentence] = useState('');

  useEffect(() => {
    // Get a random sentence from the info array
    const randomIndex = Math.floor(Math.random() * data.info.length);
    setRandomSentence(data.info[randomIndex]);
  }, []);

  return (
    <header>
      <h1>{randomSentence}</h1>
    </header>
  );
};

export default DynamicHeader;