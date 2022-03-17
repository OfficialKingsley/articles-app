/** @format */

import axios from "axios";
import React, { createContext, useState } from "react";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
    const getUser = async (username) => {
        const res = await axios.get(`http://localhost:8000/?username=${username}`);
        return res.data;
    };
    return (
        <UserContext.Provider value={{ getUser }}>
            <>{children}</>
        </UserContext.Provider>
    );
};

export default UserContextProvider;
