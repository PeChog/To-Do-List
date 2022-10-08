import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

const Header = ({ switchThemeToggle, theme }) => {
  return (
    <div className="header-container">
      <section className="left-header">
        <FontAwesomeIcon icon="fa-solid fa-list" className="icon" />
        <h1 className="title">ToDo List</h1>
      </section>
      <section className="right-header">
        {theme ? (
          <div className="lightDark">
            <FontAwesomeIcon
              icon="fa-solid fa-moon"
              className="lightDarkIcon"
            />
            <span>Dark Mode</span>
          </div>
        ) : (
          <div className="lightDark">
            <FontAwesomeIcon icon="fa-solid fa-sun" className="lightDarkIcon" />
            <span>Light mode</span>
          </div>
        )}
        <input type="checkbox" className="switch" onClick={switchThemeToggle} />
      </section>
    </div>
  );
};

export default Header;
