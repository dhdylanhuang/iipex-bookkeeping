import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import InfoPerformance from './components/InfoPerformance';
import Enquiry from './components/Enquiry';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <InfoPerformance />
      <Enquiry />
    </div>
  );
}

export default App;
