import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import carsData from '../data/carsData.json';
import '../styles/CarDetailsPage.css';
import { Heart } from 'lucide-react';

function CarDetailsPage({ favorites, toggleFavorite, carsData }) {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === parseInt(id));
  const [mainImage, setMainImage] = useState(car.images[0]);
  const isFavorite = favorites.includes(car.id);

  
  if (!car) {
    return <div className="error">Car not found</div>;
  }

  return ( 
    <div className="car-details-page">
      <h1 className="page-title">Car Details</h1>
      <div className="content-container">
        {/* Left Section */}
        <div className="left-section">
          <div className="main-box">
            <h2 className="main-title">Sports car with the best design and acceleration</h2>
            <p className="main-description">
              Safety and comfort while driving a futuristic and elegant sports car.
            </p>
            {/* ✅ Dynamically updating main image */}
            <img src={"../assets/" + mainImage} alt={car.name} className='main-image'/>
          </div>

          {/* Row of Small Boxes */}
          <div className="small-box-container">
            {/* ✅ First Box - Keeps its unique style but updates the main image on click */}
            <div className="firstbox" onClick={() => setMainImage(car.images[0])}>
              <div className="small-box first">
                <img src={"../assets/" + car.images[0]} alt={car.name} className='first'/>
              </div>
            </div>

            {/* ✅ Other Two Small Boxes - Also Change Main Image When Clicked */}
            {car.images.slice(1).map((image, index) => (
              <div key={index} className="small-box" onClick={() => setMainImage(image)}>
                <img src={"../assets/" + image} alt={`${car.name} ${index + 1}`} className="thumbnail"/>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          {/* 1) Heart Button (top-right corner) */}
          <button
            className="heart-button-details"
            onClick={() => toggleFavorite(car.id)}
          >
            <Heart
              size={20}
              color={isFavorite ? 'red' : '#596780'}
              fill={isFavorite ? 'red' : 'none'}
            />
          </button>

          {/* Car Name */}
          <h2 className="car-name">{car.name}</h2>

          <div className="rating">
  {/* Generate stars based on car.rating (integer value only) */}
  {Array.from({ length: 5 }).map((_, index) => (
    index < Math.floor(car.rating) ? (
      <svg key={index} xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="#FBAD39">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.16664 0.658349C8.2242 0.475814 8.33846 0.316382 
        8.49281 0.20321C8.64717 0.0900392 8.83358 0.0290222 9.02498 0.0290222C9.21637 0.0290222 9.40279 
        0.0900392 9.55714 0.20321C9.71149 0.316382 9.82575 0.475814 9.88331 0.658349L11.4333 5.42502H16.4333C16.6315 
        5.41752 16.8268 5.47513 16.9892 5.58905C17.1516 5.70296 17.2723 5.86692 17.3327 6.05586C17.3932 6.24481 
        17.3902 6.44835 17.324 6.63539C17.2579 6.82244 17.1324 6.9827 16.9666 7.09168L12.9083 10.0333L14.4583 
        14.8083C14.5196 14.9902 14.5212 15.187 14.4627 15.3698C14.4043 15.5526 14.2889 15.712 14.1335 15.8246C13.9781 
        15.9372 13.7907 15.9972 13.5988 15.9958C13.4068 15.9943 13.2204 15.9316 13.0666 15.8167L8.99998 12.8417L4.94164 
        15.7917C4.7879 15.9066 4.60145 15.9693 4.40951 15.9708C4.21758 15.9722 4.03022 15.9122 3.87479 15.7996C3.71936 
        15.687 3.604 15.5276 3.54557 15.3448C3.48713 15.162 3.48868 14.9652 3.54998 14.7833L5.09998 10.0083L1.04164 
        7.06668C0.875879 6.9577 0.750352 6.79744 0.684243 6.61039C0.618134 6.42335 0.615077 6.21981 0.675539 6.03086C0.736001 
        5.84192 0.856658 5.67796 1.01907 5.56405C1.18149 5.45013 1.37673 5.39252 1.57498 5.40002H6.57498L8.16664 0.658349Z"/>
      </svg>
    ) : (
      // Empty stars (gray) if the rating is less than 5
      <svg key={index} xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="gray">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.16664 0.658349C8.2242 0.475814 8.33846 0.316382 
        8.49281 0.20321C8.64717 0.0900392 8.83358 0.0290222 9.02498 0.0290222C9.21637 0.0290222 9.40279 
        0.0900392 9.55714 0.20321C9.71149 0.316382 9.82575 0.475814 9.88331 0.658349L11.4333 5.42502H16.4333C16.6315 
        5.41752 16.8268 5.47513 16.9892 5.58905C17.1516 5.70296 17.2723 5.86692 17.3327 6.05586C17.3932 6.24481 
        17.3902 6.44835 17.324 6.63539C17.2579 6.82244 17.1324 6.9827 16.9666 7.09168L12.9083 10.0333L14.4583 
        14.8083C14.5196 14.9902 14.5212 15.187 14.4627 15.3698C14.4043 15.5526 14.2889 15.712 14.1335 15.8246C13.9781 
        15.9372 13.7907 15.9972 13.5988 15.9958C13.4068 15.9943 13.2204 15.9316 13.0666 15.8167L8.99998 12.8417L4.94164 
        15.7917C4.7879 15.9066 4.60145 15.9693 4.40951 15.9708C4.21758 15.9722 4.03022 15.9122 3.87479 15.7996C3.71936 
        15.687 3.604 15.5276 3.54557 15.3448C3.48713 15.162 3.48868 14.9652 3.54998 14.7833L5.09998 10.0083L1.04164 
        7.06668C0.875879 6.9577 0.750352 6.79744 0.684243 6.61039C0.618134 6.42335 0.615077 6.21981 0.675539 6.03086C0.736001 
        5.84192 0.856658 5.67796 1.01907 5.56405C1.18149 5.45013 1.37673 5.39252 1.57498 5.40002H6.57498L8.16664 0.658349Z"/>
      </svg>
    )
  ))}

  <span className="reviews">{car.reviews} Reviews</span>
</div>


          {/* Car Description */}
          <p className="car-description">{car.description || "Luxury, speed, and power combined."}</p>

          {/* Specs Section */}
          <div className="specs">
            <div className="spec-item"><span>Type Car:</span> <p>{car.type}</p></div>
            <div className="spec-item"><span>Steering:</span> <p>{car.transmission}</p></div>
            <div className="spec-item"><span>Capacity:</span> <p>{car.capacity} Person</p></div>
            <div className="spec-item"><span>Gasoline:</span> <p>{car.fuelCapacity}L</p></div>
          </div>

          {/* Price & Rent Button */}
          <div className="price-sectiondet">${car.pricePerDay.toFixed(2)}/day</div>
          <button className="rent-button">Rent Now</button>
        </div>
      </div>
    </div>
  );
}

export default CarDetailsPage;
