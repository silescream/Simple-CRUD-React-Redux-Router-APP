import { useSelector } from "react-redux";

import "./UserPosts.css";

export const UserPosts = () => {
  const { userPost } = useSelector((state) => state.users);

  if (userPost.length === 0) {
    return <h5>User has not been selected yet</h5>;
  }
  return (
    <>
      <h3>User Posts</h3>
      <div className="posts-content">
        {userPost?.map((post, idx) => (
          <div key={post.id}>
            {idx + 1}. {post.title}
          </div>
        ))}
      </div>
    </>
  );
};
