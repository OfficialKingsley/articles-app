/** @format */

import axios from "axios";
import React, { createContext, useState } from "react";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const getUser = async (username) => {
    const res = await axios.get(`http://localhost:8000/?username=${username}`);
    return res.data;
  };
  const makeUser = (gottenUser) => {
    setUser(gottenUser);
  };
  const verifyUser = async (username, navigate) => {
    const gottenUser = await getUser(username);
    if (gottenUser.isLoggedIn) {
      setUser(gottenUser);
      return true;
    } else {
      navigate("/login");
      return false;
    }
  };
  return (
    <UserContext.Provider value={{ getUser, makeUser, user, verifyUser }}>
      <>{children}</>
    </UserContext.Provider>
  );
};

export default UserContextProvider;
