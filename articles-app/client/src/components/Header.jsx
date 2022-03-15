/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
    const { user } = useContext(UserContext);
    return (
        <header className="header">
            <div className="header-container">
                <h1>Memories</h1>
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav>
                    <ul>
                        {user._id ? (
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <Link to={"/users/login"}>Login</Link>
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
