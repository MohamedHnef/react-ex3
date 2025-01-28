import React from 'react';
import { useParams } from 'react-router-dom';

function CarDetailsPage() {
  const { carId } = useParams(); // We'll set up the route to pass this param
  return (
    <div>
      <h2>Car Details (ID: {carId})</h2>
      {/* Detailed info about the car */}
    </div>
  );
}

export default CarDetailsPage;
