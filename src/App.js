// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import CarDetailsPage from './pages/CarDetailsPage';
import Layout from './components/Layout';

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (carId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(carId)
        ? prevFavorites.filter((id) => id !== carId)
        : [...prevFavorites, carId]
    );
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<HomePage favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/favorites"
            element={<FavoritesPage favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/car/:carId"
            element={<CarDetailsPage favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
