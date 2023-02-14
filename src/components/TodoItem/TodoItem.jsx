import { useDispatch } from "react-redux";
import { toggleCompletedTodo } from "../../features/todoSlice";
import { todoDelete } from "../../features/todoSlice";
import classNames from 'classnames'


import "./todoItem.css";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const toggleTodoHandler = (id) => {
    dispatch(toggleCompletedTodo(id));
  };
  const todoDeleteHandler = () => {
    dispatch(todoDelete(todo.id));
  };

  return (
    <div className="todo-item">
      <div
        className="todo-item__content"
        onClick={() => toggleTodoHandler(todo.id)}
      >
        Complete
      </div>
      <div className={classNames('todo-item__content', { completed: todo.completed })}>
        {todo.text}
      </div>
      <div
        className="todo-item__content"
        onClick={todoDeleteHandler}
      >
        Delete
      </div>
    </div>
  );
};
