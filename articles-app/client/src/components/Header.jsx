/** @format */

import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useNavigate, NavLink } from "react-router-dom";

const Header = () => {
    const [user, setUser] = useState({});

    return (
        <header className="header">
            <div className="header-container">
                <h1>Articles</h1>
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav>
                    <ul>
                        {user.isLoggedIn ? (
                            <li>
                                <NavLink to={"/users/login"}>Logout</NavLink>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <NavLink to={"/users/login"}>Login</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
