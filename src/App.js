import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Uploads from './pages/Uploads';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uploads" element={<Uploads />} />
      </Routes>
    </Router>
  );
}

export default App;
