import React, { useState } from "react";
import { ToCSVButton, ToJSONButton } from "./HeroButtons";

const Hero = () => {
  return (
    <div className="container mx-auto px-6 py-6 md:py-12 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
        Jaxel
      </h1>
      <p className="text-gray-700 text-lg md:text-xl mb-8">
        Seamlessly convert your data between CSV and JSON formats.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <ToCSVButton />
        <ToJSONButton />
      </div>
    </div>
  );
};

export default Hero;
