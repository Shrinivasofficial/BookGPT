import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'; // No curly braces needed
import Hero from './Components/Hero'; // No curly braces needed
import Chat from './Components/Chat'; // No curly braces needed
import { Footer } from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
