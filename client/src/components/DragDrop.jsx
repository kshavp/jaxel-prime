import React from "react";

const DragDrop = (props) => {
  return (
    <input
      type="file"
      name="csvfilename"
      accept=".xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
      className="container cursor-pointer mx-auto p-4 h-72 sm:w-full md:w-3/4 lg:w-1/2 outline-3 outline-dashed rounded-xl relative"
    />
    //
  );
};

export default DragDrop;
