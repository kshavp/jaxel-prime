import React, { useState } from "react";
import SubmitBtn from "../components/SubmitBtn";
import axios from "axios";

const ToJSON = () => {
  const [dataFile, setDataFile] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.table(dataFile);
    if (dataFile) {
      //Axios se Send to Server
      const formData = new FormData();
      formData.append("file",dataFile);
      console.log(formData);
      axios
        .post("http://localhost:3000/tojson", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const inputHandler = (e) => {
    const file = e.target.files[0];
    
    setDataFile(file);
  };

  return (
    <div className="p-8 bg-neutral-800 text-neutral-300 h-screen">
      <form
        action=""
        className="flex flex-col mx-auto"
        onSubmit={submitHandler}
      >
        <input
          type="file"
          name="csvfilename"
          accept=".xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
          onChange={(e) => inputHandler(e)}
        />
        <SubmitBtn />
      </form>
    </div>
  );
};

export default ToJSON;
