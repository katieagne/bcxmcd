import React from "react";
import "./redeem.scss";

const Redeem = () => {
  return (
    <section className="redeem">
      <div className="redeem__container">
        <div className="redeem__title-wrapper">
          <h2 className="redeem__title">Redeem your points</h2>
          <p className="redeem__link">View All</p>
        </div>
        <div className="redeem__card-container">
          {/* nuggets */}
          <div className="redeem__card">
            <div className="redeem__card-img"></div>
            <p className="redeem__text">10 Piece Chicken</p>
            <p className="redeem__text"> McNuggets Meal</p>
            <p className="redeem__text">200 points</p>
          </div>
          {/* fries */}
          <div className="redeem__card">
            <div className="redeem__card-img-b"></div>
            <p className="redeem__text">Medium Fries</p>
            <p className="redeem__text">50 points</p>
          </div>
          {/* quarter pounder */}
          <div className="redeem__card">
            <div className="redeem__card-img-c"></div>
            <p className="redeem__text">QuarterPounder</p>
            <p className="redeem__text"> with Cheese</p>
            <p className="redeem__text">100 points</p>
          </div>
          {/* chicken sam? */}
          <div className="redeem__card">
            <div className="redeem__card-img-d"></div>
            <p className="redeem__text">Chicken McNugget Meal</p>
            <p className="redeem__text">150 points</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Redeem;
