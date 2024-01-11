import React from 'react';
import ArrangeAllPost from './components/ArrangeAllPost';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>SPA React App</h1>
      </header>
      <main>
        <ArrangeAllPost />
      </main>
    </div>
  );
}

export default App;