// import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-300  py-6">
      <div className="container mx-auto px-6 text-center md:tracking-wide">
        &copy;{"2024 Jaxel. Made with ⚙️ by "}
        <Link
          target="_blank"
          to="https://keshavpriyam.vercel.app/"
          className="underline font-bold"
        >
          Keshav Priyam
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
