/** @format */

import React, { createContext, useState, useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const { getUser, makeUser } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  async function loginUser(username, password, navigate) {
    const user = await getUser(username);
    if (!user) {
      alert("There is no user with that username");
    } else if (user && user.password !== password) {
      alert("Wrong Password please try again");
    } else {
      makeUser(user);
      setIsLoggedIn(true);
      navigate(`/${username}`);
    }
  }

  return (
    <LoginContext.Provider value={{ loginUser, isLoggedIn }}>
      <>{children}</>
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
