/* eslint-disable no-unused-vars */
import "./Home.css";
import React, { useReducer } from "react";
import AddTasks from "./AddTasks";
import ListTask from "./ListTask";

const tasksReducer = (tasks, action) => {
  if (action.type === "ADD") {
    return [...tasks, { id: action.id, text: action.text }];
  } else if (action.type === "DELETE") {
    return tasks.filter((tId) => tId.id !== action.id);
  }
  return tasks;
};

export default function Home() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  //   console.log(tasks);

  const handleAddTasks = (text) => {
    dispatch({
      type: "ADD",
      id: Date.now(),
      text: text,
    });
  };
  const handleDelete = (taskId) => {
    dispatch({
      type: "DELETE",
      id: taskId,
    });
  };
  return (
    <>
      <div className="parents">
        <h1>Add Your Tasks</h1>
        <AddTasks onAddTasks={handleAddTasks} />
        <ListTask tasks={tasks} handleDelete={handleDelete} />
      </div>
    </>
  );
}
