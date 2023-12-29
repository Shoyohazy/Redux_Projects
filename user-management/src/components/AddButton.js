import React, { useState } from "react";
import "./AddButton.css";
import addImg from "../assets/add.png";
import Form from "./Form";

function AddButton() {
  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    setIsActive(true);
  }

  return (
    <>
      <div className="add-user">
        <button onClick={handleClick}>
          <img src={addImg} alt="add-users" />
        </button>
      </div>
      {isActive && <Form />}
    </>
  );
}

export default AddButton;
