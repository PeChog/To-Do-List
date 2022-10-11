import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

const AllTasks = ({ handleCheck, handleDelete, data, userToken }) => {
  return !userToken ? (
    <span>vous n'êtes pas connecté</span>
  ) : (
    <div className="tasks-container">
      {data?.map((task, index) => {
        return (
          <div className="tasks" key={index}>
            <input
              checked={task.isDone}
              type="checkbox"
              onChange={() => {
                handleCheck(task._id, index);
              }}
            />
            <span className={task.isDone ? "isDone" : "taskTitle"}>
              {task.title}
            </span>

            <FontAwesomeIcon
              icon="fa-solid fa-trash"
              onClick={() => {
                handleDelete(task._id, index);
              }}
              className="trash"
            />
          </div>
        );
      })}
    </div>
  );
};

export default AllTasks;
