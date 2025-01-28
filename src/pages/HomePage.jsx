// src/pages/HomePage.jsx
import React from 'react';
import CarCard from '../components/CarCard';
import carsData from '../data/carsData.json';
import '../styles/HomePage.css';

function HomePage({ favorites, toggleFavorite }) {
  return (
    <div className="home-container">
      <header className="catalog-header">
        <h1>Cars Catalogue</h1>
        <p>{carsData.length} Cars</p>
      </header>
      <div className="car-grid">
        {carsData.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            isFavorite={favorites.includes(car.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
