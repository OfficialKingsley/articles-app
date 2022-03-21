/** @format */

import React, { createContext, useState, useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const { getUser, setCurrentUser, updateLoggedIn } = useContext(UserContext);

  async function login(username, password, navigate) {
    const user = await getUser(username);
    if (!user) {
      alert("There is no user with that username");
    } else if (user && user.password !== password) {
      alert("Wrong Password please try again");
    } else {
      updateLoggedIn(username, password, true);
      setCurrentUser(user);
      navigate(`/${username}`);
    }
  }
  const logout = (username, password, navigate) => {
    updateLoggedIn(username, password, false);
    setCurrentUser({});
    navigate("/");
  };

  return (
    <LoginContext.Provider value={{ login, logout }}>
      <>{children}</>
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
