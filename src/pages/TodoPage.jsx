import { TodoItem } from "../components/TodoItem";
import { NewTodo } from "../components/NewTodo";
import { useSelector } from "react-redux";

import "./pageStyle.css";

export const TodoPage = () => {
  const { todos, loading, error } = useSelector((state) => state.todo);
  if (loading) {
    return (
      <div className="container">
        <div className="todo-app">
          <h1>Todo app</h1>
          <NewTodo />
          <div> Loading... </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="todo-app">
          <h1>Todo app</h1>
          <NewTodo />
          <div> Error: {error} </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="todo-app">
        <h1>Todo app</h1>
        <NewTodo />
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};
