import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faList, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "./components/Header/Header";

import "./App.scss";

library.add(faList, faTrash);

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
    <div className="App-container">
      <Header />

      <form onSubmit={handleSubmit} className="form">
        <input
          value={input}
          type="text"
          onChange={(event) => {
            setInput(event.target.value);
          }}
          className="inputText"
        ></input>
        <input type="submit" value="Add task" className="inputSubmit"></input>
      </form>
      <div className="tasks-container">
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
              <span className={task.isDone ? "isDone" : "taskTitle"}>
                {task.title}
              </span>
              <FontAwesomeIcon
                icon="fa-solid fa-trash"
                onClick={() => {
                  handleDelete(index);
                }}
                className="trash"
              />
            </div>
          );
        })}
      </div>
      <p className="signature">
        Made with <span className="signatureBold">React</span> by
        <span className="signatureBold"> Quasar</span>
      </p>
    </div>
  );
}

export default App;
