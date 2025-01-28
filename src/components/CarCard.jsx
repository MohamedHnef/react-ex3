import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car, isFavorite, toggleFavorite }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h4>{car.name}</h4>
      <p>Type: {car.type}</p>
      <p>${car.pricePerDay}/day</p>
      <Link to={`/car/${car.id}`}>Details</Link>
      <button onClick={() => toggleFavorite(car.id)}>
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
};

export default CarCard;
