import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;