import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

const Header = () => {
  return (
    <div className="header-container">
      <FontAwesomeIcon icon="fa-solid fa-list" className="icon" />
      <h1 className="title">ToDo List</h1>
    </div>
  );
};

export default Header;
