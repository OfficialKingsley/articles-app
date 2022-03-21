/** @format */

import React, { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
import { UserContext } from "../contexts/UserContext";
import { Button } from "./styles/Button.styled";
import { Head, Hamburger, Navbar } from "./styles/Header.styled";

const Header = ({ isOpen, setIsOpen }) => {
  const { user } = useContext(UserContext);
  const { logout } = useContext(LoginContext);
  const navigate = useNavigate();

  const { username, password } = user;
  const handleLogout = (e) => {
    e.preventDefault();
    logout(username, password, navigate);
  };

  return (
    <Head className="header">
      <div className="header-container">
        <h1>Articles</h1>
        <Hamburger
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <Navbar className={`nav ${isOpen ? "open" : "closed"}`}>
          {user.isLoggedIn ? (
            <>
              <ul>
                <li>
                  <NavLink to={`/${user.username}/articles`}>Articles</NavLink>
                </li>
                <li>
                  <NavLink to={`/${user.username}/articles`}>Articles</NavLink>
                </li>
                <li>
                  <Button onClick={handleLogout} bgColor="red">
                    Logout
                  </Button>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/articles"}>Articles</NavLink>
                </li>
                <li>
                  <Link to={"/login"}>
                    <Button bgColor="blue" color="white">
                      Login
                    </Button>
                  </Link>
                </li>
              </ul>
            </>
          )}
        </Navbar>
      </div>
    </Head>
  );
};

export default Header;
