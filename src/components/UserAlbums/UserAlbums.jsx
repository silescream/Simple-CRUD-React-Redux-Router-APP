import { useSelector } from "react-redux";

import "./UserAlbums.css";

export const UserAlbums = () => {
  const { userAlbum } = useSelector((state) => state.users);

  if (userAlbum.length === 0) {
    return <h5>User has not been selected yet</h5>;
  }

  return (
    <>
      <h3>User Albums</h3>
      <div className="user-albums">
        {userAlbum?.map((album, idx) => (
          <div key={album.id}>
            {idx + 1}. {album.title}
          </div>
        ))}
      </div>
    </>
  );
};
