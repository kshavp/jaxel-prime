// import React from "react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Pricing from "../components/Home/Pricing";
import Contact from "../components/Home/Contact";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div 
    className="min-h-screen bg-gray-50 flex flex-col font-sans"
    initial={{opacity:0, y:100}}
    transition={{ duration: 1 }}
    animate={{opacity:1, y:0}}
    >
      <Hero />
      <Features />
      <Pricing />
      <Contact />
    </motion.div>
  );
};

export default Home;
