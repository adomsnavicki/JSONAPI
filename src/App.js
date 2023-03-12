import "./Scss/container.scss";
import { Route, Routes } from "react-router-dom";
import JsonMainPage from "./JsonPages/JsonMainPage";
import JsonHomePage from "./JsonPages/JsonHomePage";
import Header from "./Components/Header";
import JsonPostsPage from "./JsonPages/JsonPostsPage";
import JsonUsersPage from "./JsonPages/JsonUsersPage";
import JsonAlbumsPage from "./JsonPages/JsonAlbumsPage";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<JsonMainPage />} />
        <Route path="/home/" element={<JsonHomePage />} />
        <Route path="/users/" element={<JsonUsersPage />} />
        <Route path="/posts/" element={<JsonPostsPage />} />

        <Route path="/albums/" element={<JsonAlbumsPage />} />
      </Routes>
    </div>
  );
}

export default App;
