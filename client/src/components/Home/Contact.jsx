import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Contact Us
      </h2>
      <form className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full mt-2 p-3 border rounded-md"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full mt-2 p-3 border rounded-md"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            className="w-full mt-2 p-3 border rounded-md"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
