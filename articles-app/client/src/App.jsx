/** @format */

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import "./index.css";
import AddArticle from "./routes/AddArticle";
import Article from "./routes/Article";
import Articles from "./routes/Articles";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Main from "./routes/Main";
import Register from "./routes/Register";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Globals.styled";
import { useState } from "react";
import AllArticles from "./routes/AllArticles";

const App = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const theme = {};
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header isOpen={navIsOpen} setIsOpen={setNavIsOpen} />
        <div className={`content ${navIsOpen ? "open" : "closed"}`}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/:username" element={<Home />} />
            <Route path="/:username/articles" element={<Articles />} />
            <Route path="/:username/articles/:id" element={<Article />} />
            <Route path="/:username/articles/add" element={<AddArticle />} />
            <Route path="/articles" element={<AllArticles />} />
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
