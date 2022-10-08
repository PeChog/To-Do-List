import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

const Header = ({ switchThemeToggle }, { theme }) => {
  return (
    <div className="header-container">
      <section className="left-header">
        <FontAwesomeIcon icon="fa-solid fa-list" className="icon" />
        <h1 className="title">ToDo List</h1>
      </section>
      <section className="right-header">
        <input type="checkbox" className="switch" onClick={switchThemeToggle} />
        {switchThemeToggle ? <span>Light Mode</span> : <span>Dark mode</span>}
      </section>
    </div>
  );
};

export default Header;
