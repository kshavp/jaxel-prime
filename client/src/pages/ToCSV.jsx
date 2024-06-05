import React, { useState } from "react";
import SubmitBtn from "../components/SubmitBtn";

const ToCSV = () => {
  const [dataFile, setDataFile] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.table(dataFile);
    if (dataFile) {
      //Axios se Send to Server
    }
  };

  const inputHandler = (e) => {
    setDataFile(e.target.files);
  };
  return (
    <div className="p-8 w-full bg-neutral-800 text-neutral-300">
      <form
        action=""
        className="flex flex-col mx-auto"
        onSubmit={submitHandler}
      >
        <input type="file" name="jsonfilename" onChange={(e) => inputHandler(e)} />
        <SubmitBtn />
      </form>
    </div>
  );
};

export default ToCSV;
