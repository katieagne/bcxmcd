import mcdsLogo from "../../assets/logos/MCDONALDS (1).png";
import scan from "../../assets/icons/scan.svg";
import progBar from "../../assets/images/Screenshot (132).png";
import "./Scan.scss";

function Scan() {
  return (
    <div className="scan-main">
      <div className="scan-main__header">
        <h1>Scan and Earn</h1>
        <img className="scan-main__header--img" src={scan} />
      </div>

      <div className="scan-main__container1">
        <div className="scan-main__container1--top-left">
          <img className="scan-main__container1--img" src={mcdsLogo} />
          <h1>My Rewards</h1>
        </div>
        <div className="scan-main__container1--top-right">
          <h3>My McPoints: 50</h3>
        </div>
        <div class="scan-main__container2">
          <img className="scan-main__container2--img" src={progBar} />
        </div>
      </div>
    </div>
  );
}

export default Scan;
