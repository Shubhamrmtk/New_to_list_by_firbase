import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./componats/header/Header";
import Input from "./componats/INPUT/Input";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { async } from "@firebase/util";
import Card from "./componats/Cards/Card";

const App = () => {
  const [storage, setStorage] = useState([]);
  const [updateDated, setUpdate] = useState({ name: "", task: "" });
  const [toggle, setToggle] = useState(false);
  const userCollectionRef = collection(db, "to_dos");

  const updateSceen = async () => {
    const Dbdata = await getDocs(userCollectionRef);
    const listOfdata = Dbdata.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    setStorage(listOfdata);
  };
  const addContaint = async (obj) => {
    await addDoc(userCollectionRef, obj);
  };
  const deleteTask = async (id) => {
    const userDoc = doc(db, "to_dos", id);
    await deleteDoc(userDoc);
    updateSceen();
  };
  const updateTask = async (upData, id) => {
    setToggle(true);
    console.log(upData);

    const userDoc = doc(db, "to_dos", id);
    await updateDoc(userDoc, { upData });
  };

  useEffect(() => {
    updateSceen();
  });

  return (
    <div className="App">
      <Header />
      <Input
        setStorage={setStorage}
        storage={storage}
        addContaint={addContaint}
      />
      <div>
        {storage.map((elm) => {
          return (
            <>
              <Card
                elm={elm}
                deleteTask={deleteTask}
                setUpdate={setUpdate}
                updateDated={updateDated}
                updateTask={updateTask}
                toggle={toggle}
                setToggle={setToggle}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default App;
