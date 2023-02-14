import { useDispatch } from "react-redux";
import { getUsers } from "../../features/newUserSlice";
import { PostForm } from "../PostForm";
import { addNewUser } from "../../features/newUserSlice";

export const NewUser = () => {
  const dispatch = useDispatch();

  const getAllUsersHandler = () => {
    dispatch(getUsers());
  };

  return (
    <>
      <PostForm addFunc={addNewUser} />
        <button type="button" onClick={getAllUsersHandler}>
          Get users from DB
        </button>
    </>
  );
};
