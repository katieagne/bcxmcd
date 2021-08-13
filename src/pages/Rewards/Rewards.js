import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Suggested from "../../components/Suggested/Suggested";
import Footer from "../../components/Footer/Footer";
import Redeem from "../../components/Redeem/Redeem";

const Rewards = () => {
  return (
    <div>
      <Navbar />
      <Redeem />
      <Suggested />
      <Footer />
    </div>
  );
};

export default Rewards;
