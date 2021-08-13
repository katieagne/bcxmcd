import React from "react";
import down from "../../assets/icons/down.svg";
import cart from "../../assets/icons/cart.svg";
import signout from "../../assets/icons/user.svg";
import search from "../../assets/icons/search.svg";
import location from "../../assets/icons/location.svg";
import McdsLogo from "../../assets/logos/McD-squareLogo 2.svg";
import "./Navbar.scss";

function Navbar() {
  return (
    <section>
      <div className="img">
        <img src={McdsLogo} alt="Mcdonald's Logo" />
      </div>
      <div className="main">
        <div className="main__top">
          <div className="main__top--left">
            <div className="down-img">
              <p className="main__top-txt">Language</p>
              <img className="down-img__img" src={down} />
            </div>
            <p className="main__top-txt">Newsletter</p>
            <p className="main__top-txt">Find Jobs</p>
            <p className="main__top-txt">Franchising</p>
          </div>
          <div className="main__top--right">
            <div className="search">
              <img src={search} />
              <p className="search__txt">Search</p>
            </div>
            <div className="signout">
              <img className="signout__img" src={signout} />
              <p className="signout__txt">Sign Out</p>
            </div>
            <img className="singout__img2" src={cart} />
          </div>
        </div>
        <div className="main__bottom">
          <div className="down-img">
            <p className="main__bottom--inactive">Menu</p>
            <img className="down-img__img" src={down} />
          </div>
          <p className="main__bottom--inactive">Nutrition</p>
          <p className="main__bottom--active">Rewards</p>
          <p className="main__bottom--inactive">McCafe</p>
          <p className="main__bottom--inactive">Family</p>
          <div className="location">
            <img className="location__img" src={location} />
            <p className="main__bottom--inactive">Toronto, ON</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
