import React, { useContext, useState } from "react";
import "./input.css";

const Input = ({ storage, setStorage, addContaint }) => {
  const data = {
    name: "",
    task: "",
  };
  const [usedata, setUserdata] = useState(data);
  const getData = (e) => {
    e.preventDefault();
    addContaint({ name: usedata.name, task: usedata.task });
  };
  return (
    <div>
      <form onSubmit={getData} className="form">
        <div className="NameOfuser">
          <label>Enter Your Name</label>
          <input
            value={usedata.name}
            type="text"
            placeholder="name"
            onChange={(e) => {
              setUserdata({ ...usedata, name: e.target.value });
            }}
          />
        </div>
        <div className="task">
          <label>Enter Your Task</label>
          <input
            type="text"
            placeholder="Enter The Task "
            value={usedata.task}
            onChange={(e) => {
              setUserdata({ ...usedata, task: e.target.value });
            }}
          />
        </div>

        <button>Submit</button>
      </form>
      {/* <p>{usedata.name}</p>
      <p>{usedata.task}</p> */}
    </div>
  );
};

export default Input;
