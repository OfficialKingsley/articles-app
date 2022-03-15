/** @format */

import React, { createContext, useState } from "react";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        _id: 1,
    });
    return (
        <UserContext.Provider value={{ user }}>
            <>{children}</>
        </UserContext.Provider>
    );
};

export default UserContextProvider;
