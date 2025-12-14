import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MehendiPage from './pages/MehendiPage';
import ShirniPage from './pages/ShirniPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mehendi" element={<MehendiPage />} />
        <Route path="/shirni" element={<ShirniPage />} />
      </Routes>
    </BrowserRouter>
  );
}
