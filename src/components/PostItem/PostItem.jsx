import { useDispatch } from "react-redux";
import { deletePost } from "../../features/postSlice";

import "./postItem.css";

export const PostItem = ({ post }) => {
  const dispatch = useDispatch();

  const postDeleteHandler = () => {
    dispatch(deletePost(post.id));
  };
  return (
    <div className="post-item">
      <div className="post-item__content">{post.text}</div>
      <div className="post-item__content" onClick={postDeleteHandler}>
        Delete
      </div>
    </div>
  );
};
