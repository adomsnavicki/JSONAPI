import "./Scss/container.scss";
import { Route, Routes } from "react-router-dom";
import JsonMainPage from "./JsonPages/JsonMainPage";
import JsonHomePage from "./JsonPages/JsonHomePage";
import Header from "./Components/Header";
import JsonPostsPage from "./JsonPages/JsonPostsPage";
import JsonUsersPage from "./JsonPages/JsonUsersPage";
import JsonAlbumsPage from "./JsonPages/JsonAlbumsPage";
import JsonUserPage from "./JsonPages/JsonUserPage";
import JsonAlbumPage from "./JsonPages/JsonAlbumPage";
import JsonPostPage from "./JsonPages/JsonPostPage";
import "./Scss/content-wrapper.scss";

function App() {
  return (
    <div className="content-wrapper">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/JSONAPI" element={<JsonMainPage />} />
          <Route path="/home/" element={<JsonHomePage />} />
          <Route path="/users/" element={<JsonUsersPage />} />
          <Route path="/user/" element={<JsonUserPage />} />
          <Route path="/user/:id" element={<JsonUserPage />} />
          <Route path="/posts/" element={<JsonPostsPage />} />
          <Route path="/post/:id" element={<JsonPostPage />} />
          <Route path="/albums/" element={<JsonAlbumsPage />} />
          <Route path="/album/:id/:id" element={<JsonAlbumPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
