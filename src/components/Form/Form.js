import "./style.scss";

const Form = ({ handleSubmit, input, setInput }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          value={input}
          type="text"
          onChange={(event) => {
            setInput(event.target.value);
          }}
          className="inputText"
        ></input>
        <input type="submit" value="Add task" className="inputSubmit"></input>
      </form>
    </div>
  );
};

export default Form;
