// src/components/CarCard.jsx
import React from 'react';
import { Heart } from 'lucide-react';
import '../styles/CarCard.css';

const CarCard = ({ car, isFavorite, toggleFavorite }) => {
  return (
    <div className="car-card">
      <div className="card-header">
        <h3>{car.name}</h3>
        <p>{car.type}</p>
        <button
          className="favorite-button"
          onClick={() => toggleFavorite(car.id)}
          aria-label="Favorite"
        >
          <Heart size={20} color={isFavorite ? 'red' : '#596780'} fill={isFavorite ? 'red' : 'none'} />
        </button>
      </div>
      <img src={car.images[0]} alt={car.name} className="car-image" />
      <div className="card-details">
        <div className="card-detail">
          <span>{car.capacity}L</span>
          <span>Manual</span>
          <span>{car.people} People</span>
        </div>
        <div className="card-footer">
          <p>
            <strong>${car.pricePerDay}</strong> / day
          </p>
          <button className="rent-button">Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
