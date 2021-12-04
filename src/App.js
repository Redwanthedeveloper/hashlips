import React, { useEffect } from 'react';
import Swiper from 'swiper';
import HomeScreen from './screens/HomeScreen';

function App() {
  useEffect(() => {
    new Swiper();
  }, []);
  return <HomeScreen />;
}

export default App;
