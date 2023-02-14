import { NewUser } from "../components/NewUser";
import { UserItem } from "../components/UserItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { UserDetails } from "../components/UserDetails";
import { useEffect } from "react";
import { getUsers } from "../features/newUserSlice";
import { Link } from "react-router-dom";
import { userDelete } from "../features/newUserSlice";

import "./pageStyle.css";

export const UserPage = () => {
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const userDeleteHandler = (id) => {
    dispatch(userDelete(id));
  };

  if (loading) {
    return (
      <div className="container">
        <div className="user-app">
          <h1>User app</h1>
          <NewUser />
          <div> Loading... </div>
        </div>
        <UserDetails />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="user-app">
          <h1>User app</h1>
          <NewUser />
          <div> Error: {error} </div>
        </div>
        <UserDetails />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="user-app">
        <h1>User app</h1>
        <NewUser />
        {users?.map((user, idx) => (
          <div key={user.id} className="user-links">
            <Link className="user-link" to={`/user/${user.id}`}>
              <UserItem idx={idx} user={user} />
            </Link>
            <Link
              className="delete-button"
              onClick={() => userDeleteHandler(user.id)}
              to={"/user/"}
            >
              Delete
            </Link>
          </div>
        ))}
      </div>
      <UserDetails />
    </div>
  );
};
