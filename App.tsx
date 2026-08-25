
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Services from './components/Services';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NAV_ITEMS } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    document.getElementById('lcp-skeleton')?.remove();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar
        items={NAV_ITEMS}
      />
      
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <Blog />
        <Contact />
      </main>

      {/* Fixed LINE Button */}
      <a 
        href="https://lin.ee/KmrG6Oj" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hover:opacity-80 transition-opacity bg-[#06C755] rounded-full p-3 shadow-lg flex items-center justify-center"
        aria-label="Add LINE Friend"
        style={{ width: '56px', height: '56px' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
          <path d="M20.5 10.5c0-4.7-4.3-8.5-9.5-8.5s-9.5 3.8-9.5 8.5c0 4.2 3.4 7.7 8.1 8.4.3.1.7.2.8.5.1.3 0 .8-.1 1-.2.5-.9 1.9-1 2.3-.2.6-.1.9.3.5 3.8-3.6 5.5-5.9 5.7-6.2.1-.2.2-.3.3-.5 2.9-1.4 4.9-3.7 4.9-6z"/>
        </svg>
      </a>

      <Footer />
    </div>
  );
};

export default App;
