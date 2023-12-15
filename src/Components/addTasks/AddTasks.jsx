/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./AddTasks.css";

export default function AddTasks({ onAddTasks }) {
  const [text, setText] = useState("");
  //   console.log(text);
  return (
    <>
      {" "}
      <div className="inputePrent">
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          placeholder="Add your tasks"
        />
        <button
          style={{ "--clr": "#FF44CC" }}
          onClick={() => {
            onAddTasks(text);
            setText("");
          }}
        >
          <span>Add</span>

          <i></i>
        </button>
      </div>
    </>
  );
}
