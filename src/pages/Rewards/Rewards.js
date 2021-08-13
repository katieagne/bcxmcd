import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Suggested from "../../components/Suggested/Suggested";
import Footer from "../../components/Footer/Footer";
import Redeem from "../../components/Redeem/Redeem";
import SecretMenu from "../../components/SecretMenu/SecretMenu";
import Scan from "../../components/Scan/Scan";

const Rewards = () => {
  return (
    <div>
      <Navbar />
      <Scan />
      <SecretMenu />
      <Redeem />
      <Suggested />
      <Footer />
    </div>
  );
};

export default Rewards;
