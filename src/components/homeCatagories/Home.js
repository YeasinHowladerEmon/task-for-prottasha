import React from "react";
import Navbar from "../share/Navbar";
import Bannar1 from "./Bannar1";
import BothImage from "./BothImage";
import Hr from "./Hr";
import Tutorial1 from "./Tutorial1";
import Tutorial2 from "./Tutorial2";
import Tutorial3 from "./Tutorial3";
import Bannar2 from "./Bannar2";
import Footer from "../share/Footer";
const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Bannar1 />
      <BothImage />
      <Hr />
      <Tutorial1 />
      <Tutorial2 />
      <Tutorial3 />
      <Bannar2 />
      <Footer />
    </div>
  );
};

export default Home;
