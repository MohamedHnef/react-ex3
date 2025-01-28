// src/components/Layout.jsx
import React from 'react';
import '../Layout.css'; // Add styles for layout structure

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="top-bar">
        <div className="logo">ShenCar</div>
        <input
          type="text"
          placeholder="Search for cars..."
          className="search-bar"
        />
      </header>
      <div className="main-section">
        <aside className="left-sidebar">
          {/* Filtering options go here */}
          <div className="filters">Filters</div>
        </aside>
        <main className="content">{children}</main>
      </div>
      <footer className="footer">Footer content here</footer>
    </div>
  );
}

export default Layout;
