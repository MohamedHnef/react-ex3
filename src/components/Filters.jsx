// src/components/Filters.jsx
import React from 'react';

function Filters({ selectedType, setSelectedType, maxPrice, setMaxPrice }) {
  return (
    <div>
      <h4>Type</h4>
      <div>
        <label>
          <input type="checkbox" />
          Sport
        </label>
        {/* Add more checkboxes for other types */}
      </div>
      <h4>Capacity</h4>
      <div>
        <label>
          <input type="checkbox" />
          2 Person
        </label>
        {/* Add more capacity options */}
      </div>
      <h4>Price (Per Day)</h4>
      <input
        type="range"
        min="0"
        max="100"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <p>Max: ${maxPrice}.00</p>
    </div>
  );
}

export default Filters;
