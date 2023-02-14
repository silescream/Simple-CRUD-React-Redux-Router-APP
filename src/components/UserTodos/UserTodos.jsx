import { useSelector } from "react-redux";

import "./UserTodos.css";

export const UserTodos = () => {
  const { userTodo } = useSelector((state) => state.users);

  if (userTodo.length === 0) {
    return <h5>User has not been selected yet</h5>;
  }

  return (
    <>
      <h3>User Todos</h3>
      <div className="user-todo">
        {userTodo?.map((todo, idx) => (
          <div key={todo.id}>
            {idx + 1}. {todo.title}
          </div>
        ))}
      </div>
    </>
  );
};
