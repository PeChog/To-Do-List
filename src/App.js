import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faList,
  faTrash,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header";

import Home from "./components/Home/Home";

import "./App.scss";

library.add(faList, faTrash, faSun, faMoon);

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 10 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Header handleToken={handleToken} />
      <Routes>
        <Route
          path="/signin"
          element={<SignIn t handleToken={handleToken} />}
        />

        <Route
          path="/"
          element={<Home userToken={userToken} handleToken={handleToken} />}
        />

        <Route path="/signup" element={<SignUp handleToken={handleToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
