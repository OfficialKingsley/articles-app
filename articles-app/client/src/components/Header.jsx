/** @format */

import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);

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
              <>
                <li>
                  <NavLink to={`/${user.username}/articles`}>Articles</NavLink>
                </li>
                <li>
                  <Link to={"/users/login"}>Logout</Link>
                </li>
              </>
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
