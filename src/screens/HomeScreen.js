import React from 'react';
import About from '../components/About';
import Feature from '../components/Feature';
import Header from '../components/Header';
import Hero from '../components/Hero';

const HomeScreen = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col'>
        <Hero />
        <About />
        <Feature />
      </div>
    </>
  );
};

export default HomeScreen;
