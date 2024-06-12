import React from "react";
import { LuFileJson } from "react-icons/lu";
import { BsFiletypeCsv, BsFiletypeJson } from "react-icons/bs";
import { Link } from "react-router-dom";

const ToJSONButton = () => {
  return (
    <Link to="/csvtojson">
      <button className="active:scale-90 m-3 bg-blue-500 relative ring-blue-600 text-white px-8 py-4 rounded-full shadow-lg transition flex gap-x-4 font-bold">
        to JSON
        <BsFiletypeJson className="bg-transparent text-yellow-300 font-bold text-2xl" />
      </button>
    </Link>
  );
};
const ToCSVButton = () => {
  return (
    <Link to="/jsontocsv">
      <button className="active:scale-90 m-3 bg-blue-500 relative ring-blue-600 text-white px-8 py-4 rounded-full shadow-lg transition flex gap-x-4 font-bold">
        to CSV
        <BsFiletypeCsv className="bg-transparent text-green-300 font-bold text-2xl" />
      </button>
    </Link>
  );
};

export { ToJSONButton, ToCSVButton };
