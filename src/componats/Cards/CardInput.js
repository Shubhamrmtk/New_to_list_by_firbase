import React, { useState } from "react";

const CardInput = ({ setUpdate, updateDated, setToggle, updateTask, elm }) => {
  const [tempD, setTempD] = useState({ name: "", task: "" });
  const setSubmit = () => {
    setUpdate({ ...updateDated, name: tempD.name });
    setUpdate({ ...updateDated, task: tempD.task });
    setToggle(false);
    // console.log(updateDated);
    updateTask(tempD, elm.id);
  };
  return (
    <div>
      <div>
        <input
          value={tempD.name}
          onChange={(e) => {
            setTempD({ ...updateDated, name: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          value={tempD.task}
          placeholder="Enter your Task"
          onChange={(e) => {
            setTempD({ ...tempD, task: e.target.value });
          }}
        />
      </div>
      <button
        onClick={() => {
          setSubmit();
        }}
      >
        set update
      </button>
    </div>
  );
};

export default CardInput;
