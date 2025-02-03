import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Heart, Search } from "lucide-react";
import Filters from "./Filters";
import "../styles/Layout.css";
import { Link } from "react-router-dom";

function Layout({ children, filters, carsData, searchQuery, setSearchQuery }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isFavoritesPage = location.pathname === "/favorites";

  const handleHeartClick = () => {
    if (isFavoritesPage) {
      navigate("/");
    } else {
      navigate("/favorites");
    }
  };

  return (
    <div className="layout-container">
      <header className="top-bar">
        <Link to="/" className="logo">
          ShenCarCar
        </Link>

        <div className="search-container">
          <div className="search-bar-wrapper">
            <input
              type="text"
              placeholder="Search by car name"
              className="search-bar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-icon">
              <Search size={20} color="#596780" />
            </button>
          </div>
        </div>

        <button
          className="favorites-icon"
          onClick={handleHeartClick}
          aria-label="Favorites"
        >
          <Heart
            size={24}
            color={isFavoritesPage ? "red" : "#596780"}
            fill={isFavoritesPage ? "red" : "none"}
          />
        </button>
      </header>

      <div className="main-section">
        <aside className="left-sidebar">
          <Filters {...filters} carsData={carsData} />
        </aside>
        <main className="content">
          {React.isValidElement(children)
            ? React.cloneElement(children, { searchQuery })
            : children}
        </main>
      </div>
      <footer className="footer">
      <div className="footer-container">
    <div className="footer-column logo-column">
      <h2 className="footer-logo">ShenCarCar</h2>
      <p>
        Our vision is to provide convenience and help increase your sales
        business.
      </p>
    </div>
    <div className="footer-column">
      <h4>About</h4>
      <ul>
        <li><button className="link-button">How it works</button></li>
        <li><button className="link-button">Featured</button></li>
        <li><button className="link-button">Partnership</button></li>
        <li><button className="link-button">Business Relation</button></li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Community</h4>
      <ul>
        <li><button className="link-button">Events</button></li>
        <li><button className="link-button">Blog</button></li>
        <li><button className="link-button">Podcast</button></li>
        <li><button className="link-button">Invite a friend</button></li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Socials</h4>
      <ul>
        <li><button className="link-button">Discord</button></li>
        <li><button className="link-button">Instagram</button></li>
        <li><button className="link-button">Twitter</button></li>
        <li><button className="link-button">Facebook</button></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <p>©2025 ShenCarCar. All rights reserved</p>
    <div className="footer-links">
      <button className="link-button">Privacy & Policy</button>
      <button className="link-button">Terms & Condition</button>
    </div>
  </div>
</footer>

    </div>
  );
}

export default Layout;
