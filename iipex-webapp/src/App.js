import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import InfoPerformance from './components/InfoPerformance';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <InfoPerformance />
      <Enquiry />
      <Footer />
    </div>
  );
}

export default App;
