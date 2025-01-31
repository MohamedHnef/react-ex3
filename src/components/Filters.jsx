import React, { useMemo, useEffect } from "react";

function Filters({
  carsData,
  selectedTypes,
  setSelectedTypes,
  selectedCapacity,
  setSelectedCapacity,
  maxPrice,
  setMaxPrice,
}) {
  const minPrice = useMemo(
    () => Math.min(...carsData.map((car) => car.pricePerDay)),
    [carsData]
  );
  const dynamicMaxPrice = useMemo(
    () => Math.max(...carsData.map((car) => car.pricePerDay)),
    [carsData]
  );

  const typeCounts = useMemo(() => {
    const counts = {};
    carsData.forEach((car) => {
      counts[car.type] = (counts[car.type] || 0) + 1;
    });
    return counts;
  }, [carsData]);

  const capacityCounts = useMemo(() => {
    const counts = {};
    carsData.forEach((car) => {
      counts[car.capacity] = (counts[car.capacity] || 0) + 1;
    });
    return counts;
  }, [carsData]);

  useEffect(() => {
    setSelectedTypes(["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"]);
    setSelectedCapacity([2, 4, 6]);
    setMaxPrice(dynamicMaxPrice);
  }, [setSelectedTypes, setSelectedCapacity, setMaxPrice, dynamicMaxPrice]);

  const handleTypeChange = (type) => {
    if (selectedTypes.length === 1 && selectedTypes.includes(type)) {
      alert("At least one car type must be selected!");
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
            {type} ({typeCounts[type] || 0})
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
            {capacity} Person ({capacityCounts[capacity] || 0})
          </label>
        ))}
      </div>
      <h4>Price (Per Day)</h4>
      <div className="price-slider">
        <input
          type="range"
          min="0"
          max="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <p>Max: ${maxPrice}</p>
      </div>
    </div>
  );
}


export default Filters;
