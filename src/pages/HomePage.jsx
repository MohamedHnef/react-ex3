import React, { useState, useEffect } from 'react';
import carsData from '../data/carsData.json';

function HomePage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // For now, we can just load from the JSON directly
    setCars(carsData);
  }, []);

  return (
    <div>
      <h2>Home Page (All Cars)</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {cars.map(car => (
          <div key={car.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h4>{car.name}</h4>
            <p>Type: {car.type}</p>
            <p>${car.pricePerDay}/day</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
