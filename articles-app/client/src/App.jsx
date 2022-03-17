/** @format */

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import AddArticle from "./routes/AddArticle";
import Article from "./routes/Article";
import Articles from "./routes/Articles";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Main from "./routes/Main";
import Register from "./routes/Register";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/:username" element={<Home />} />
                <Route path="/:username/articles" element={<Articles />} />
                <Route path="/:username/articles/:id" element={<Article />} />
                <Route path="/:username/articles/add" element={<AddArticle />} />
            </Routes>
        </div>
    );
};

export default App;
