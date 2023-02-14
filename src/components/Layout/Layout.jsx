import { NavLink, Outlet } from "react-router-dom";


import "./layout.css";
import { AppRoutes } from "../../Routes/AppRoutes";

export const Layout = () => {
  return (
    <>
      <header className="app-header">
        <div className="app-nav">
          <NavLink className="app-nav__item" to={AppRoutes.home}>Home</NavLink>
          <NavLink className="app-nav__item" to={AppRoutes.user}>Users app</NavLink>
          <NavLink className="app-nav__item" to={AppRoutes.todo}>Todo app</NavLink>
          <NavLink className="app-nav__item" to={AppRoutes.posts}>Post app</NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
};
