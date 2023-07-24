import React from "react";
import './Navbar.css';

function Navbar() {
    return (
      <div className="navbar-container">
        <div>
          <img className="navbar-logo" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" />
        </div>
        <div>Search</div>
      </div>
    );
}

export default Navbar;