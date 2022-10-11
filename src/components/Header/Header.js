import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from "react-router-dom";

import Toggle from "../Toggle/Toggle";

import "./style.scss";

const Header = ({ switchThemeToggle, theme, token, setUser }) => {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <section className="left-header">
        <FontAwesomeIcon icon="fa-solid fa-list" className="icon" />
        <h1 className="title">ToDo List</h1>
      </section>
      <div>
        <Link to="signup"> Sign Up</Link>
        <Link to="signin">Sign In</Link>
      </div>
      <Toggle switchThemeToggle={switchThemeToggle} theme={theme} />
    </div>
  );
};

export default Header;
