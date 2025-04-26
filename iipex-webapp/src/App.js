import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import InfoPerformance from './components/InfoPerformance';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div id='navbar'>
        <Navbar />
      </div>
      <div id='home'>
        <Home />
      </div>
      <div id='services'>
        <Services />
      </div>
      <div id='info'>
        <InfoPerformance />
      </div>
      <div id='enquiry'>
        <Enquiry />
      </div>
      <div id='footer'>
        <Footer />
      </div>
    </>
  );
}

export default App;
