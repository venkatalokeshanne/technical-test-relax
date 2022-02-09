import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { manipulateToDos, toDoList } from "../addToDo/addToDoSlice";
import "./toDoSummary.css";

export default function ToDoSummary() {
  const todoListItem = useSelector(toDoList);
  const dispatch = useDispatch();

  const onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (ev, status) => {
    let id = ev.dataTransfer.getData("id");
    dispatch(manipulateToDos(id));
  };

  var tasks = {
    todo: [],
    done: [],
  };
  if (todoListItem.length > 0) {
    todoListItem.forEach((t) => {
      let status;
      if (t.done) {
        status = "done";
      } else {
        status = "todo";
      }
      tasks[status].push(
        <div
          key={t.id}
          onDragStart={(e) => onDragStart(e, t.id)}
          draggable
          className="draggable border mt-5"
        >
          <p>{t.text}</p>
        </div>
      );
    });
  }

  return (
    <div className="container-drag w-100">
      <div
        className="todo w-5"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, true);
        }}
      >
        <span className="header">NOT DONE</span>
        {tasks.todo}
      </div>
      <div
        className="completed w-5"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, false)}
      >
        <span className="header text-white">DONE</span>
        {tasks.done}
      </div>
    </div>
  );
}
