// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import CarDetailsPage from './pages/CarDetailsPage';
import Layout from './components/Layout';
import carsData from './data/carsData.json';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [filteredCars, setFilteredCars] = useState(carsData);

  // Filter-related state
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedCapacity, setSelectedCapacity] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100);

  const toggleFavorite = (carId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(carId)
        ? prevFavorites.filter((id) => id !== carId)
        : [...prevFavorites, carId]
    );
  };

  return (
    <Router>
      <Layout
        filters={{
          selectedTypes,
          setSelectedTypes,
          selectedCapacity,
          setSelectedCapacity,
          maxPrice,
          setMaxPrice,
        }}
        carsData={carsData}
      >
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                cars={filteredCars}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                setFilteredCars={setFilteredCars}
                filters={{ selectedTypes, selectedCapacity, maxPrice }}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                cars={carsData}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/car/:carId"
            element={
              <CarDetailsPage
                cars={carsData}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
