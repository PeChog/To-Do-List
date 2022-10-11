import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

const Toggle = ({ switchThemeToggle, theme }) => {
  return (
    <section className="right-header">
      {theme ? (
        <div className="lightDark">
          <FontAwesomeIcon icon="fa-solid fa-moon" className="lightDarkIcon" />
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
  );
};

export default Toggle;
