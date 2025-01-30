import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import CarDetailsPage from './pages/CarDetailsPage';
import Layout from './components/Layout';
import carsData from './data/carsData.json';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [favorites, setFavorites] = useState([]);
  const [filteredCars, setFilteredCars] = useState(carsData);
  const [searchQuery, setSearchQuery] = useState('');
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
      <ScrollToTop />
      <Layout
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
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
                searchQuery={searchQuery}
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
            path="/cars/:id"
            element={
              <CarDetailsPage
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                carsData={carsData}
              />
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
