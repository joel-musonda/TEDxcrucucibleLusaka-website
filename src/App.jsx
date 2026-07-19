import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
// 1. Import the Footer component
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <MainContent />
      {/* 2. Mount it right at the absolute bottom */}
      <Footer /> 
    </div>
  );
}

export default App;