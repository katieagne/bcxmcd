import React from "react";
import "./footer.scss";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import snapchat from "../../assets/icons/snapchat.svg";
import instagram from "../../assets/icons/instagram.svg";
import pinterest from "../../assets/icons/pinterest.svg";
import app from "../../assets/icons/app-store.png";
import play from "../../assets/icons/play-store.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <p className="footer__link">About Us</p>
          <p className="footer__link">Our Food</p>
          <p className="footer__link">Find Jobs</p>
          <p className="footer__link">Community</p>
          <p className="footer__link">Get More McD's</p>
          <p className="footer__link">Contact Us</p>
        </div>
        <div className="footer__socials-container">
          <div className="footer__socials">
            <div className="footer__social-icons">
              <img className="footer__icon" src={facebook} />
              <img className="footer__icon" src={twitter} />
              <img className="footer__icon" src={youtube} />
              <img className="footer__icon" src={snapchat} />
              <img className="footer__icon" src={instagram} />
              <img className="footer__icon" src={pinterest} />
            </div>
          </div>
          <div className="footer__app">
            <img className="footer__icon" src={app} />
            <img className="footer__icon--zero" src={play} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
