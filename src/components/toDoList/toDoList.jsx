import "./toDoList.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { manipulateToDos, toDoList } from "../addToDo/addToDoSlice";

function ToDoList() {
  const dispatch = useDispatch();
  const toDoItems = useSelector(toDoList);

  const onChangeUserInput = (item) => {
    dispatch(manipulateToDos(item.id));
  };

  return (
    <div className="mt-5">
      <ul>
        {toDoItems.map((item) => (
          <li>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => onChangeUserInput(item)}
            />
            <span className={item.done ? "lineThrough" : null}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
