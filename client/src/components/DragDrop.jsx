import React from "react";

const DragDrop = (props) => {
  return (
    <input
      type="file"
      name="csvfilename"
      accept=".xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
      className="cursor-pointer mx-auto w-full p-4 md:w-1/2 h-72 outline-3 outline-dashed rounded-xl"
    />
    //
  );
};

export default DragDrop;
