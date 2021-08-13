import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Suggested from "../../components/Suggested/Suggested";
import Footer from "../../components/Footer/Footer";
import Redeem from "../../components/Redeem/Redeem";
import SecretMenu from "../../components/SecretMenu/SecretMenu";

const Rewards = () => {
  return (
    <div>
      <Navbar />
      <SecretMenu />
      <Redeem />
      <Suggested />
      <Footer />
    </div>
  );
};

export default Rewards;
