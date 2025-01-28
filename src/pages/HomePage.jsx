import React, { useState, useEffect } from 'react';
import carsData from '../data/carsData.json';
import CarCard from '../components/CarCard';

function HomePage({ favorites, toggleFavorite }) {
  const [cars, setCars] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [maxPrice, setMaxPrice] = useState(999);

  useEffect(() => {
    setCars(carsData);
  }, []);

  const filteredCars = cars.filter(car => {
    if (selectedType && car.type !== selectedType) return false;
    if (car.pricePerDay > maxPrice) return false;
    return true;
  });

  return (
    <div>
      <h2>Home Page (All Cars)</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Car Type:
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">All</option>
            <option value="Sport">Sport</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
          </select>
        </label>

        <label style={{ marginLeft: '1rem' }}>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {filteredCars.map(car => (
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
