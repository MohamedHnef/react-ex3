// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import CarCard from '../components/CarCard';
import '../styles/HomePage.css';

function HomePage({ cars, favorites, toggleFavorite, filters }) {
  const { selectedTypes, selectedCapacity, maxPrice } = filters;

  const [filteredCars, setFilteredCars] = useState(cars);

  useEffect(() => {
    const filtered = cars.filter((car) => {
      if (selectedTypes.length > 0 && !selectedTypes.includes(car.type)) {
        return false;
      }
      if (selectedCapacity.length > 0 && !selectedCapacity.includes(car.capacity)) {
        return false;
      }
      if (car.pricePerDay > maxPrice) {
        return false;
      }
      return true;
    });

    setFilteredCars(filtered);
  }, [cars, selectedTypes, selectedCapacity, maxPrice]); // Ensure dependencies are minimal and necessary

  return (
    <div className="home-container">
      <header className="catalog-header">
        <h1 className="title">Cars Catalogue</h1>
        <p>{filteredCars.length} Cars</p>
      </header>
      <div className="car-grid">
        {filteredCars.map((car) => (
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
