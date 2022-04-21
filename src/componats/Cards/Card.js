import React from "react";
import CardInput from "./CardInput";

const Card = ({
  elm,
  deleteTask,
  setUpdate,
  updateDated,
  updateTask,
  toggle,
  setToggle,
}) => {
  return (
    <div className="Card_container">
      {toggle ? (
        <CardInput
          setUpdate={setUpdate}
          updateDated={updateDated}
          updateTask={updateTask}
          elm={elm}
          setToggle={setToggle}
        />
      ) : (
        <div className="para">
          <p>{elm.name}</p>
          <p>{elm.task}</p>
        </div>
      )}

      <button
        onClick={() => {
          deleteTask(elm.id);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          setToggle(true);
        }}
      >
        update
      </button>
    </div>
  );
};

export default Card;
