/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import LoginContextProvider from "./contexts/LoginContext.jsx";
import UserContextProvider from "./contexts/UserContext.jsx";

ReactDOM.render(
    <React.StrictMode>
        <UserContextProvider>
            <LoginContextProvider>
                <Router>
                    <App />
                </Router>
            </LoginContextProvider>
        </UserContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
