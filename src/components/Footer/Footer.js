import React from "react";
import "./footer.scss";

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
      </div>
    </section>
  );
};

export default Footer;
