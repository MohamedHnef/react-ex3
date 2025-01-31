import React from "react";
import CarCard from "../components/CarCard";
import "../styles/HomePage.css";

function FavoritesPage({ cars, favorites, toggleFavorite }) {
  const favoriteCars = cars.filter((car) => favorites.includes(car.id));

  return (
    <div className="home-container">
      <header className="catalog-header">
        <h1>Favorites</h1>
        <p>{favoriteCars.length} Cars</p>
      </header>
      {favoriteCars.length === 0 ? (
        <p className="no-favorites">No favorites yet.</p>
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
