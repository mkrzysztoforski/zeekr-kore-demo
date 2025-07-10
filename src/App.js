import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultBot from './DefaultBot';
import QrBot from './QrBot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultBot />} />
        <Route path="/qr" element={<QrBot />} />
      </Routes>
    </Router>
  );
}

export default App;
