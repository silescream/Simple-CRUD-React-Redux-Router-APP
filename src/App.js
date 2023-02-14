import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { TodoPage } from "./pages/TodoPage";
import { UserPage } from "./pages/UserPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PostPage } from "./pages/PostPage";
import { AppRoutes } from "./Routes/AppRoutes";
import { UserDetails } from "./components/UserDetails";
import "./App.css";


function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path={AppRoutes.home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={AppRoutes.todo} element={<TodoPage />} />
          <Route path={AppRoutes.user} element={<UserPage />}>
            <Route path={AppRoutes.userId} element={<UserDetails />} />
          </Route>
          <Route path={AppRoutes.error} element={<NotFoundPage />} />
          <Route path={AppRoutes.posts} element={<PostPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
