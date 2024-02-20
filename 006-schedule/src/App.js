import React from 'react';
import RecordsPreviews from './components/RecordsPreviews';
import './App.css'; 

const recordsData = require('./records.json'); // Import records data

function App() {
  return (
    <div className="app">
      <h1>Schedule App</h1>
      <RecordsPreviews records={recordsData.entries} />
    </div>
  );
}

export default App;