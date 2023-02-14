import { useDispatch } from "react-redux";
import { addNewPost, getPosts } from "../../features/postSlice";
import { PostForm } from "../PostForm";

export const NewPost = () => {
  const dispatch = useDispatch();

  const getAllPostsHandler = () => {
    dispatch(getPosts());
  };
  return (
    <>
      <PostForm addFunc={addNewPost} />
        <button type="button" onClick={getAllPostsHandler}>
          Get posts from DB
        </button>
    </>
  );
};
