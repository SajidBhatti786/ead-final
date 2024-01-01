import React from "react";
import Navbar from "../components/Navbar";
import AllProducts from "../components/AllProducts";
import Services from "../components/Services";
import TopSellers from "../components/TopSellers";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <AllProducts />
      <Services />
      <TopSellers />
      <Footer />
    </div>
  );
}

export default Home;
