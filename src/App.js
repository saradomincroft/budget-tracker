import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import Index from './components/Index';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<Home />} />
        </Route>
        
    </Routes>
  </Router>
  )
}

export default App;
