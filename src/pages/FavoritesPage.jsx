import React from 'react';
import CarCard from '../components/CarCard';
import carsData from '../data/carsData.json';

function FavoritesPage({ favorites, toggleFavorite }) {
  const favoriteCars = carsData.filter(car => favorites.includes(car.id));

  return (
    <div>
      <h2>Favorites</h2>
      {favoriteCars.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteCars.map(car => (
          <CarCard
            key={car.id}
            car={car}
            isFavorite={favorites.includes(car.id)}
            toggleFavorite={toggleFavorite}
          />
        ))
      )}
    </div>
  );
}

export default FavoritesPage;
