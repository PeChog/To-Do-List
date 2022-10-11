import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    try {
      event.preventDefault();
      //je viens reset le message d'erreur à chaque tentative
      setErrorMessage("");
      //une requête au serveur pour créer un nouveau user
      // axios.post("url", body)

      const response = await axios.post("http://localhost:3001/user/signup", {
        email: email,
        username: username,
        password: password,
      });

      if (response.data) {
        console.log("J'ai bien réussi à créer un compte");
        handleToken(response.data.token);
        //Rediriger l'utilisateur vers la page principale
        navigate("/");
      }
    } catch (error) {
      //   console.log(error.message);

      setErrorMessage({ error: error.message });
    }
  };
  return (
    <div>
      <h1>Sign up </h1>
      <form onSubmit={handleSignup}>
        <input
          value={username}
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          value={email}
          type="email"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />

        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />

        <input type="submit" value="S'inscrire" />
        <p style={{ color: "red" }}>{errorMessage}</p>
      </form>
    </div>
  );
};

export default Signup;
