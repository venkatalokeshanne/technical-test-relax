import "./addToDo.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDoItem, toDoList } from "./addToDoSlice";

function AddToDo() {
  const [userInputValue, setUserInputValue] = useState("");
  const dispatch = useDispatch();
  const toDoItems = useSelector(toDoList);

  useEffect(() => {
    var input = document.getElementById("inputField");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addToList").click();
      }
    });
  });
  const userInput = (event) => {
    setUserInputValue(event.target.value);
  };

  const addItem = () => {
    if (userInputValue !== "") {
      dispatch(
        addToDoItem({
          id: toDoItems.length + 1,
          text: userInputValue,
          done: false,
        })
      );
      setUserInputValue("");
    }
  };

  return (
    <div className="addToDo mt-5">
      <textarea
        className="mr-2 margin-auto"
        id="inputField"
        placeholder="Enter your TODO"
        onChange={(event) => userInput(event)}
        value={userInputValue}
      ></textarea>
      <img
        className="cursor-pointer h-50 mt-2"
        src="./add.png"
        id="addToList"
        onClick={addItem}
      ></img>
    </div>
  );
}

export default AddToDo;
