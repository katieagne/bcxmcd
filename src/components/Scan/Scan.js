import mcdsLogo from "../../assets/logos/MCDONALDS (1).png";
import scan from "../../assets/icons/scan.svg";
import purpMan from "../../assets/icons/purp-dude.png";
import progBar from "../../assets/images/Screenshot (132).png";
import "./Scan.scss";

function Scan() {
  return (
    <div className="scan-main">
      <div className="scan-main__header">
        <h1 className="scan-main__header--txt">Scan and Earn</h1>
        <img className="scan-main__header--img" src={scan} />
      </div>

      <div className="scan-main__container1">
        <div className="scan-main__container1--top-left">
          <img className="scan-main__container1--img" src={mcdsLogo} />
          <h1 className="scan-main__container1--txt">My Rewards</h1>
        </div>
        <div className="scan-main__container1--top-right">
          <h3 className="scan-main__container1--text">My McPoints: 50</h3>
        </div>
        <div className="scan-main__container2">
          <img className="scan-main__container2--img" src={progBar} />
        </div>
      </div>

      <div className="wrap">
        <div className="scan-main__points">
          <div className="inner-wrap">
            <div className="innder-wrap2">
              <div className="scan-main__points-wrapper">
                <p className="scan-main__points-wrapper--colored-txt">
                  50 Points{" "}
                </p>
                <p className="scan-main__points-wrapper--txt">
                  = Redeem a free medium fries and access to a tier 1 secret
                  menu item
                </p>
              </div>
              <div className="scan-main__points-wrapper">
                <p className="scan-main__points-wrapper--colored-txt">
                  100 Points{" "}
                </p>
                <p className="scan-main__points-wrapper--txt">
                  = Redeem a free Big Mac and access to a tier 2 secret menu
                  item
                </p>
              </div>
              <div className="scan-main__points-wrapper">
                <p className="scan-main__points-wrapper--colored-txt">
                  150 Points{" "}
                </p>
                <p className="scan-main__points-wrapper--txt">
                  = Redeem a free Chicken McNugget Meal and access to a tier 3
                  secret menu item
                </p>
              </div>
              <div className="scan-main__points-wrapper">
                <p className="scan-main__points-wrapper--colored-txt">
                  200 Points{" "}
                </p>
                <p className="scan-main__points-wrapper--txt">
                  = Redeem a $10 McDonald’s giftcard and access to a tier 4
                  secret menu item
                </p>
              </div>
            </div>
            <div className="scan-main__img-wrapper">
              <img className="scan-main__img-wrapper--img" src={purpMan} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scan;
