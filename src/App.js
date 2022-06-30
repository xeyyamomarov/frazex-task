import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Posts } from "./components/Posts";
import { Comments } from "./components/Comments";
import { Users } from "./components/Users";
import { Home } from "./components/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <BrowserRouter>
        <div className="navbar">
          <nav>
            <ul>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/comments">Comments</Link>
              </li>
            </ul>
          </nav>
          <div className="switch">
            <span>{`${darkMode ? "Dark mode :On" : "Dark mode:Off"}`}</span>
            <input
              type="checkbox"
              onChange={() => {
                setDarkMode(!darkMode);
              }}
            />
          </div>
        </div>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/users"
              element={<Users isOpen={isOpen} setIsOpen={setIsOpen} />}
            />
            <Route
              path="/posts"
              element={<Posts isOpen={isOpen} setIsOpen={setIsOpen} />}
            />
            <Route
              path="/comments"
              element={<Comments isOpen={isOpen} setIsOpen={setIsOpen} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      {/* <ModalTable isOpen={isOpen} setIsOpen={setIsOpen}/> */}
    </div>
  );
}

export default App;
