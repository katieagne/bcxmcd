import React from "react";

function Navbar() {
  return (
    <div className="main">
      <div className="main__top">
        <div className="main__top--left">
          <p>Language</p>
          <p>Newsletter</p>
          <p>Find Jobs</p>
          <p>Franchising</p>
        </div>
        <div className="main__top--right">
          <p>Search</p>
          <p>Sign Out</p>
        </div>
      </div>
      <div className="main__bottom">
        <p>Menu</p>
        <p>Nutrition</p>
        <p>Rewards</p>
        <p>McCafe</p>
        <p>Family</p>
        <p>Location</p>
      </div>
    </div>
  );
}

export default Navbar;
