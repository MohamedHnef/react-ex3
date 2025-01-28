import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import CarDetailsPage from './pages/CarDetailsPage';

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (carId) => {
    setFavorites(prev =>
      prev.includes(carId) ? prev.filter(id => id !== carId) : [...prev, carId]
    );
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/favorites" element={<FavoritesPage favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/car/:carId" element={<CarDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
