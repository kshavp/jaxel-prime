import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="container mx-auto px-6 py-12 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Pricing<span className="font-thin text-lg">{" (Coming Soon)"}</span>
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-1 hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Free</h3>
          <p className="text-gray-600 mb-4">Basic features for personal use</p>
          <p className="text-gray-800 font-bold text-4xl mb-4">Rs.0</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
            Sign Up
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-1 hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Pro</h3>
          <p className="text-gray-600 mb-4">
            Advanced features for professionals
          </p>
          <p className="text-gray-800 font-bold text-4xl mb-4">Rs.49/mo</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
            Sign Up
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-1 hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Enterprise</h3>
          <p className="text-gray-600 mb-4">All features for large teams</p>
          <p className="text-gray-800 font-bold text-4xl mb-4">Rs.99/mo</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
