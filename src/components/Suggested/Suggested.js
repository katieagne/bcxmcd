import React from "react";
import "./suggested.scss";
import cart from "../../assets/icons/cart.svg";

const Suggested = () => {
  return (
    <section className="suggested">
      <div className="suggested__container">
        <h2 className="suggested__title">Suggested for you</h2>
        <div className="suggested__card-container">
          {/* card 1 */}
          <div className="suggested__card">
            <div className="suggested__card-img">
              <p className="suggested__points">2x points</p>
            </div>
            <p className="suggested__text">Big Mac Combo Meal</p>
            <p className="suggested__text">50 points</p>
            <p className="suggested__text">$9.49</p>
            <button className="suggested__btn">
              Add to cart <img src={cart} />
            </button>
          </div>
          {/* card 2 */}
          <div className="suggested__card">
            <div className="suggested__card-img-b">
              <p className="suggested__points">2x points</p>
            </div>
            <p className="suggested__text">Big Mac Combo Meal</p>
            <p className="suggested__text">50 points</p>
            <p className="suggested__text">$9.49</p>
            <button className="suggested__btn">
              Add to cart <img src={cart} />
            </button>
          </div>
          {/* card 3 */}
          <div className="suggested__card">
            <div className="suggested__card-img-c">
              <p className="suggested__points">2x points</p>
            </div>
            <p className="suggested__text">Big Mac Combo Meal</p>
            <p className="suggested__text">50 points</p>
            <p className="suggested__text">$9.49</p>
            <button className="suggested__btn">
              Add to cart <img src={cart} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suggested;
