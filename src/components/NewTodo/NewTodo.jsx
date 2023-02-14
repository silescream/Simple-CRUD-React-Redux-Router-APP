import { useDispatch } from "react-redux";
import { getTodos } from "../../features/todoSlice";
import { PostForm } from "../PostForm";
import { addNewTodo } from "../../features/todoSlice";

export const NewTodo = () => {
  const dispatch = useDispatch();

  const getAllTodosHandler = () => {
    dispatch(getTodos());
  };
  return (
    <>
      <PostForm addFunc={addNewTodo} />
        <button type="button" onClick={getAllTodosHandler}>
          Get todos from DB
        </button>
    </>
  );
};
