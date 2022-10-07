import React, { useState } from "react";
import "./App.scss";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTab = [...tasks];
    newTab.push({
      title: input,
      isDone: false,
    });
    setTasks(newTab);
    setInput("");
  };

  const handleCheck = (index) => {
    const newTab = [...tasks];
    newTab[index].isDone = !newTab[index].isDone;
    setTasks(newTab);
  };

  const handleDelete = (index) => {
    const newTab = [...tasks];
    newTab.splice(index, 1);
    setTasks(newTab);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          type="text"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        ></input>
        <input type="submit"></input>
      </form>
      {tasks.map((task, index) => {
        return (
          <div className="tasks" key={index}>
            <input
              checked={task.isDone}
              type="checkbox"
              onChange={() => {
                handleCheck(index);
              }}
            />
            <span className={task.isDone ? "isDone" : null}>{task.title}</span>
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
