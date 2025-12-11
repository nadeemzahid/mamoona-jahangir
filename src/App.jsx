import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MehendiPage from './pages/MehendiPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mehendi" element={<MehendiPage />} />
      </Routes>
    </BrowserRouter>
  );
}
