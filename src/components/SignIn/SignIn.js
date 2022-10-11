import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("http://localhost:3001/user/signin", {
        email: email,
        password: password,
      });

      console.log(response.data);
      if (response.data.token) {
        handleToken(response.data.token);

        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <input
        value={email}
        placeholder="email"
        type="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <input type="submit" value="Se connecter" />
      <br />
    </form>
  );
};

export default SignIn;
