import "./Scss/container.scss";
import { Route, Routes } from "react-router-dom";
import JsonMainPage from "./JsonPages/JsonMainPage";
import JsonHomePage from "./JsonPages/JsonHomePage";
import Header from "./Components/Header";
import JsonPostsPage from "./JsonPages/JsonPostsPage";
import JsonUsersPage from "./JsonPages/JsonUsersPage";
import JsonAlbumsPage from "./JsonPages/JsonAlbumsPage";
import JsonUserPage from "./JsonPages/JsonUserPage";
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
          <Route path="/posts/" element={<JsonPostsPage />} />
          <Route path="/albums/" element={<JsonAlbumsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
