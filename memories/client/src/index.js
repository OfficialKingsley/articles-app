/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import UserContextProvider from "./contexts/UserContext.jsx";

ReactDOM.render(
    <React.StrictMode>
        <UserContextProvider>
            <Router>
                <App />
            </Router>
        </UserContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
