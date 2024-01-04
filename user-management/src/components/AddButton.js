//import React, { useState } from "react";
import "./AddButton.css";
import addImg from "../assets/add.png";
import Form from "./Form";
import UserList from "./UserList";
import { useDispatch, useSelector } from "react-redux";
import { changeIsUpdating } from "../store/UserReducer";

function AddButton() {
  //const [isActive, setIsActive] = useState(false);
  const isUpdating = useSelector((state) => state.isUpdating)
  const dispatch = useDispatch()
  function handleClick() {
    // setIsActive((preIsActive) => !preIsActive);
    dispatch(changeIsUpdating());

  }


  return (
    <>
      <div className="add-user">
        <button onClick={handleClick}>
          <img src={addImg} alt="add-users" />
        </button>
      </div>
      {isUpdating ? <Form handleReset = {handleClick} /> : <UserList />}
    </>
  );
}

export default AddButton;
