// App.js
import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import CarDetailsPage from './pages/CarDetailsPage';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem' }}>
        {/* Example nav links */}
        <Link to="/">Home</Link> |{' '}
        <Link to="/favorites">Favorites</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/car/:carId" element={<CarDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
