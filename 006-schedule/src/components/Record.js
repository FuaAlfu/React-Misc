import React, { useState } from 'react';

const Record = ({ record }) => {
  const [showEvents, setShowEvents] = useState(false);

  const handleClick = () => {
    setShowEvents(!showEvents);
  };

  return (
    <div className="record">
      <h3>{record.date}</h3>
      <ul style={{ display: showEvents ? 'block' : 'none' }}>
        {record.events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
      <div>
        <p>Click "Show Events" to see events for {record.date}</p>
        <button onClick={handleClick}>
          {showEvents ? 'Hide Events' : 'Show Events'}
        </button>
      </div>
    </div>
  );
};

export default Record;