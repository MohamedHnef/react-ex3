import React, { useMemo, useEffect } from 'react';

function Filters({
  carsData,
  selectedTypes,
  setSelectedTypes,
  selectedCapacity,
  setSelectedCapacity,
  maxPrice,
  setMaxPrice,
}) {
  // Calculate the min and max prices dynamically
  const minPrice = useMemo(
    () => Math.min(...carsData.map((car) => car.pricePerDay)),
    [carsData]
  );
  const dynamicMaxPrice = useMemo(
    () => Math.max(...carsData.map((car) => car.pricePerDay)),
    [carsData]
  );

  // Ensure filters are selected by default
  useEffect(() => {
    setSelectedTypes(['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback']); // All types selected
    setSelectedCapacity([2, 4, 6]); // All capacities selected
    setMaxPrice(dynamicMaxPrice); // Set default to max price
  }, [setSelectedTypes, setSelectedCapacity, setMaxPrice, dynamicMaxPrice]);

  const handleTypeChange = (type) => {
    if (selectedTypes.length === 1 && selectedTypes.includes(type)) {
      // Prevent deselecting the last type
      alert('At least one car type must be selected!');
      return;
    }
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleCapacityChange = (capacity) => {
    setSelectedCapacity((prev) =>
      prev.includes(capacity)
        ? prev.filter((c) => c !== capacity)
        : [...prev, capacity]
    );
  };

  const handlePriceChange = (e) => {
    const newPrice = Number(e.target.value);
    if (newPrice >= minPrice && newPrice <= dynamicMaxPrice) {
      setMaxPrice(newPrice);
    }
  };

  return (
    <div>
      <h4>Type</h4>
      <div className="filter-options">
        {['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback'].map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              checked={selectedTypes.includes(type)}
              onChange={() => handleTypeChange(type)}
            />
            {type}
          </label>
        ))}
      </div>
      <h4>Capacity</h4>
      <div className="filter-options">
        {[2, 4, 6].map((capacity) => (
          <label key={capacity}>
            <input
              type="checkbox"
              checked={selectedCapacity.includes(capacity)}
              onChange={() => handleCapacityChange(capacity)}
            />
            {capacity} Person
          </label>
        ))}
      </div>
      <h4>Price (Per Day)</h4>
      <div className="price-slider">
        <input
          type="range"
          min={minPrice}
          max={dynamicMaxPrice}
          value={maxPrice}
          onChange={handlePriceChange}
        />
        <p>
          Max: ${maxPrice} (Range: ${minPrice} - ${dynamicMaxPrice})
        </p>
      </div>
    </div>
  );
}

export default Filters;
