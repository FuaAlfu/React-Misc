import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DynamicHeader from './components/DynamicHeader';
import ContactUs from './components/ContactUs';
import ContactPage from './pages/ContactPage';
import AboutUs from './components/AboutUs';
import MoreInfo from './pages/MoreInfo';

function App() {
  return (
    <Router>
      <div className="app">
        <DynamicHeader />
        <Switch>
          <Route path="/contact" pages={ContactPage} />
          <Route path="/more-info" pages={MoreInfo} />
          <Route path="/">
            <AboutUs />
          </Route>
        </Switch>
        <ContactUs />
      </div>
    </Router>
  );
}

export default App;