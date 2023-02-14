import { NewPost } from "../components/NewPost";
import { PostItem } from "../components/PostItem/";
import { useSelector } from "react-redux";

import "./pageStyle.css";

export const PostPage = () => {
  const { loading, error, posts } = useSelector((state) => state.posts);

  if (loading) {
    return (
      <div className="container">
        <div className="post-app">
          <h1>Post app</h1>
          <NewPost />
          <div> Loading... </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="post-app">
          <h1>Post app</h1>
          <NewPost />
          <div> Error: {error} </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="post-app">
        <h1>Post app</h1>
        <NewPost />
        {posts?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
