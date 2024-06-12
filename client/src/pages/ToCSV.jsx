import React, { useState } from "react";
import SubmitBtn from "../components/SubmitBtn";
import DragDrop from "../components/DragDrop";
import { motion } from "framer-motion";

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
    <div className="p-8 w-full bg-neutral-800 text-neutral-300 h-screen">
      <h1 className='text-center text-5xl my-6 font-bold 
      bg-gradient-to-r from-yellow-200 to-green-600 bg-clip-text text-transparent'>JSON to CSV</h1>
      <motion.form
        initial={{opacity:0, x:-100}}
        transition={{duration:1}}
        animate={{opacity:1, x:0}}

        action=""
        className="flex flex-col mx-auto"
        onSubmit={submitHandler}
      >
        <DragDrop onChange={(e) => inputHandler(e)} />
        <h1 className='text-center text-5xl font-bold relative bottom-40'>
          <span className="hidden md:block"> Drag and Drop File 📃</span>
          <span className="block md:hidden"> Tap Here to Upload 📃</span>
        </h1>
        <SubmitBtn />
      </motion.form>
    </div>
  );
};

export default ToCSV;
