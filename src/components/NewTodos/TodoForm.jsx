import "./TodoForm.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";
import { nanoid } from "nanoid";
import { useState } from "react";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({ title: "", details: "" });
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputValue((prevTodo) => {
      return { ...prevTodo, [name]: value };
    });
  };

  const onClickAdd = (event) => {
    const { title, details } = inputValue;
    const todo = {
      id: nanoid(),
      title: title,
      details: details,
      isDone: false,
    };

    if (title === "" || details === "") return;
    dispatch(addTodo(todo));
  };

  return (
    <div className="message is-link">
      <div className="message-header">
        <p className="is-size-4">Add Todo</p>
      </div>
      <div className="message-body">
        <form>
          <div className="field">
            <label className="label is-size-5">Title</label>
            <input
              className="input"
              type="text"
              name="title"
              value={inputValue.title}
              placeholder="뭐해야 됐더라?"
              onChange={onChangeHandler}
            />
          </div>
          <div className="field">
            <label className="label is-size-5">Details</label>
            <input
              className="input"
              type="text"
              name="details"
              value={inputValue.details}
              placeholder="추가 메모"
              onChange={onChangeHandler}
            />
          </div>
          <div className="controls">
            <button
              className="button is-link is-small"
              onClick={() => {
                onClickAdd();
              }}
            >
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
