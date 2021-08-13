import React from "react";
import "./secretMenu.scss";
import drink from "../../assets/icons/drink.svg";
import question from "../../assets/icons/question.svg";
import mcd from "../../assets/icons/mcd.svg";

const SecretMenu = () => {
  return (
    <section className="secret">
      <div className="secret__container">
        <div className="secret__title-wrapper">
          <h2 className="secret__title">Secret Menu Rewards</h2>
          <p className="secret__link">View All</p>
        </div>
        <div className="secret__card-container">
          {/* item one */}
          <div className="secret__card">
            <div className="secret__img-wrapper">
              <div className="secret__card-img">
                <img className="secret__img" src="" />
              </div>
            </div>
            <p className="secret__text">10 Piece Chicken</p>
            <p className="secret__text"> McNuggets Meal</p>
            <p className="secret__text">200 points</p>
          </div>
          {/* item two */}
          <div className="secret__card">
            <div className="secret__img-wrapper">
              <div className="secret__card-img-b">
                <img className="secret__img" src={drink} />
              </div>
            </div>
            <p className="secret__text">Medium Fries</p>
            <p className="secret__text">50 points</p>
          </div>
          {/* item three */}
          <div className="secret__card">
            <div className="secret__img-wrapper">
              <div className="secret__card-img-c">
                <img className="secret__img" src={question} />
              </div>
            </div>
            <p className="secret__text">QuarterPounder</p>
            <p className="secret__text"> with Cheese</p>
            <p className="secret__text">100 points</p>
          </div>
          {/* item four */}
          <div className="secret__card">
            <div className="secret__img-wrapper">
              <div className="secret__card-img-d">
                <img className="secret__img" src={mcd} />
              </div>
            </div>
            <p className="secret__text">Chicken McNugget Meal</p>
            <p className="secret__text">150 points</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretMenu;
