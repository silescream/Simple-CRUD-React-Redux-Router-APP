import { useDispatch } from "react-redux";
import { getUserAlbum } from "../../features/newUserSlice";
import { getUserPost } from "../../features/newUserSlice";
import { getUserTodo } from "../../features/newUserSlice";
import "./userItem.css";

export const UserItem = ({ user, idx }) => {
  const dispatch = useDispatch();

  function getDataHandler() {
    dispatch(getUserAlbum(user.id));
    dispatch(getUserPost(user.id));
    dispatch(getUserTodo(user.id));
  }
  return (
    <div className="user-item">
      <div onClick={getDataHandler} className="user-item__text">
        {idx + 1}. {user.text}
      </div>
    </div>
  );
};
