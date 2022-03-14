/** @format */

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import Login from "./routes/Login";
import Register from "./routes/Register";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/users/register" element={<Register />} />
                <Route path="/users/login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default App;
