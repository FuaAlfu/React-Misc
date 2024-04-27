import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PasswordGenerating from './components/PasswordGenerating';
import './styles/main.scss';


function App() {
  return (
    <div>
      <Header />
      <PasswordGenerating />
      <Footer />
    </div>
  );
}

export default App;
