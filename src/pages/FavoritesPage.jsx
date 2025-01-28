// src/pages/FavoritesPage.jsx
import React from 'react';
import CarCard from '../components/CarCard';

function FavoritesPage({ cars, favorites, toggleFavorite }) {
  const favoriteCars = cars.filter((car) => favorites.includes(car.id));

  return (
    <div>
      <h2>Favorites</h2>
      {favoriteCars.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="car-grid">
          {favoriteCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              isFavorite={favorites.includes(car.id)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
