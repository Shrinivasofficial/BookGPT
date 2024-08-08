import React from 'react';
import { Navbar } from './Components/Navbar';
import { Hero } from './Components/Hero';
import { Footer } from './Components/Footer';
export const App = () => {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(210,105,30,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <Hero />
      <Footer></Footer>
    </>
  );
}

export default App;
