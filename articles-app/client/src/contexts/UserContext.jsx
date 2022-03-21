/** @format */

import axios from "axios";
import React, { createContext, useState } from "react";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const getUser = async (username) => {
    const res = await axios.get(
      `http://localhost:8000/users/?username=${username}`
    );
    console.log(res.data);
    return res.data;
  };

  const setCurrentUser = (gottenUser) => {
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
  const addUser = (addingUser) => {
    axios.post("http://localhost:8000/users/add", JSON.stringify(addingUser), {
      headers: { "Content-Type": "application/json" },
    });
  };
  const updateLoggedIn = (username, password, loginState) => {
    axios.put(
      "http://localhost:8000/users/login/",
      JSON.stringify({ username, password, loginState }),
      { headers: { "Content-Type": "application/json" } }
    );
  };
  return (
    <UserContext.Provider
      value={{
        getUser,
        setCurrentUser,
        user,
        verifyUser,
        addUser,
        updateLoggedIn,
      }}
    >
      <>{children}</>
    </UserContext.Provider>
  );
};

export default UserContextProvider;
