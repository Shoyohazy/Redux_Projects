import React, { useState } from "react";
import "./AddButton.css";
import addImg from "../assets/add.png";
import Form from "./Form";
import UserList from "./UserList";

function AddButton() {
  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    setIsActive(true);
  }

  function handleReset(){
    setIsActive(false); 
  }

  return (
    <>
      <div className="add-user">
        <button onClick={handleClick}>
          <img src={addImg} alt="add-users" />
        </button>
      </div>
      {isActive ? <Form handleReset = {handleReset} /> : <UserList />}
    </>
  );
}

export default AddButton;
