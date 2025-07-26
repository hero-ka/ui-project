import React from "react";
import Icon from "../Icon/Icon";
import "../csshomepage/SearchBar.css";

function SearchBar({ topOffset }) {
  return (
    <div className="search-bar" style={{ top: topOffset }}>
      <div className="left-section">
        <h1 className="logo">shop.co</h1>
        <ul className="nav-links">
          <select className="category-select">
            <option>Shop</option>
            <option>Shop</option>
            <option>Shop</option>
          </select>
          <li>On Sale</li>
          <li>New Arrival</li>
          <li>Brands</li>
        </ul>
      </div>
      <div className="right-section">
        <div className="search-box">
          <Icon icon="SearchIcon" />
    
          <input
            type="text"
            placeholder="    Search for products..."
            className="search-input"
          />
        </div>
        <div className="basket-login">
          <Icon icon="BasketIcon" />
          <Icon icon="LoginIcon" />
        </div>
      </div>
     
    </div>
  );
}

export default SearchBar;