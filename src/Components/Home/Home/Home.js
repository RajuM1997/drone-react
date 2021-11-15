import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import OurMission from "../OurMission/OurMission";
import OurStore from "./OurStore/OurStore";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <OurMission />
      <OurStore />
      <Footer />
    </div>
  );
};

export default Home;
