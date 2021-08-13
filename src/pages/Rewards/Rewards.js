import React from "react";
import Suggested from "../../components/Suggested/Suggested";
import Footer from "../../components/Footer/Footer";
import Redeem from "../../components/Redeem/Redeem";
import SecretMenu from "../../components/SecretMenu/SecretMenu";
import Scan from "../../components/Scan/Scan";

const Rewards = () => {
  return (
    <div>
      <Scan />
      <SecretMenu />
      <Redeem />
      <Suggested />
    </div>
  );
};

export default Rewards;
