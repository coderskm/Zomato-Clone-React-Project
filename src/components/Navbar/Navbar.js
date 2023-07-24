import React from "react";
import './Navbar.css';
import location from '../../assets/location.png';
import chevron from '../../assets/chevron.png';
import search from '../../assets/search.png';
import verticalLine from '../../assets/verticalLine.png';
function Navbar() {
    return (
      <div className="navbar-container">
        <div>
          <img
            className="navbar-logo"
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
          />
        </div>
        <div className="navbar-logo-search">
          <div className="navbar-search-container">
            <div className="navbar-search-location">
              <img className="navbar-search-location-sign" src={location} alt="location" />
              <input className="navbar-input-location" placeholder="city" />
              <div>
                <img className="navbar-search-chevron" src={chevron} alt="chevron" />
                <img className="navbar-search-verticalLine" src={verticalLine} alt="verticalLine" />
              </div>
            </div>
            <div className="navbar-search-rest">
              <img className="navbar-searchIcon" src={search} alt="search" />
              <input className="navbar-input-rest" placeholder="search for restaurant" />
            </div>
          </div>
        </div>

        <div className="btn-container">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    );
}

export default Navbar;