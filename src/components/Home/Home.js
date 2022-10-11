import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import AllTasks from "../AllTasks/AllTasks";
import Footer from "../Footer/Footer";
import SignIn from "../SignIn/SignIn";

import axios from "axios";

import "./style.scss";

const Home = ({ userToken }) => {
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState(false);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const switchThemeToggle = () => {
    if (theme) {
      document.body.className = "body-light";
      setTheme(false);
    } else {
      document.body.className = "body-dark";
      setTheme(true);
    }
  };

  const handleSubmit = async (event) => {
    setErrorMessage("");
    try {
      const response = await axios.post("http://localhost:3001/create/Task", {
        title: input,
        isDone: false,
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleCheck = (index, _id) => {
    const newTab = [...data];
    newTab[_id].isDone = !newTab[_id].isDone;
    setData(newTab);
  };

  const handleDelete = async (id, index) => {
    try {
      const response = await axios.post("http://localhost:3001/delete/task", {
        _id: id,
      });
      const newTab = [...data];
      newTab.splice(index, 1);
      setData(newTab);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/tasks");
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement !</span>
  ) : (
    <div className="App-container">
      <Header
        theme={theme}
        setTheme={setTheme}
        switchThemeToggle={switchThemeToggle}
      />
      <Form handleSubmit={handleSubmit} setInput={setInput} input={input} />
      <AllTasks
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        data={data}
        userToken={userToken}
      />
      <Footer />
    </div>
  );
};

export default Home;
