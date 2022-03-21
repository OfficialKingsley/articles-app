/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import ArticlesContextProvider from "./contexts/ArticlesContext.jsx";
import LoginContextProvider from "./contexts/LoginContext.jsx";
import UserContextProvider from "./contexts/UserContext.jsx";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <LoginContextProvider>
        <Router>
          <ArticlesContextProvider>
            <App />
          </ArticlesContextProvider>
        </Router>
      </LoginContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
