import React, { useState } from "react";
import SubmitBtn from "../components/SubmitBtn";
import axios from "axios";
import DragDrop from "../components/DragDrop";
import { motion } from "framer-motion";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToJSON = () => {
  const [dataFile, setDataFile] = useState(null);
  // const [toastInfo, setToastInfo] = useState()

  const submitHandler = (e) => {
    e.preventDefault();
    toast.warn("Servers unavailable 🗿", {
      position: "bottom-right",
      autoClose: 3000,
      theme: "dark",
      transition: Slide,
    });
    if(!dataFile){
      //Add Toast
      return;
    }
    if (dataFile) {
      //Axios se Send to Server
      const formData = new FormData();
      formData.append("file", dataFile);
      console.log(formData);
      // axios
      //   .post("http://localhost:3000/tojson", formData, {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   })
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  };

  const inputHandler = (e) => {
    const file = e.target.files[0];
    setDataFile(file);
  };

  return (
    <div className="p-8 bg-neutral-800 text-neutral-300 h-screen">
      <h1 className='text-center text-5xl my-6 font-bold 
      bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent'>CSV to JSON</h1>
      <ToastContainer />
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

export default ToJSON;
