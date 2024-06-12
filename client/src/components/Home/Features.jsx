import React from "react";
import { FaBeer } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { SiFastapi } from "react-icons/si";

const Features = () => {
  return (
    <section id="features" className="container mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Features
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 flex gap-x-4 items-center">
          <SiFastapi />
            Fast Conversion
          </h3>
          <p className="text-gray-600">
            Quickly convert between CSV and JSON formats with lightning speed.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 flex gap-x-4 items-center">
          <GrSecure />
            Secure
          </h3>
          <p className="text-gray-600">
            Your data is safe with us. We ensure all conversions are secure and
            private.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 flex gap-x-4 items-center">
            <FaBeer />
            User Friendly
          </h3>
          <p className="text-gray-600">
            An intuitive interface makes it easy for anyone to use our tool.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
