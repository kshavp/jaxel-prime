// import React from "react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Pricing from "../components/Home/Pricing";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
