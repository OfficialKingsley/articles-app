/** @format */

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();
  const { getUser, addUser } = useContext(UserContext);
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      alert("Your password is too short");
    } else if (password !== password2) {
      alert("Make sure the first and second passwords are the same");
    } else {
      const gottenUser = await getUser(username);
      if (gottenUser) {
        alert(`The user with the username ${username} already exists`);
      } else {
        const user = {
          name,
          email,
          username,
          password,
          password2,
          isLoggedIn: false,
        };
        addUser(user);
        navigate("/login");
      }
    }
  };
  return (
    <>
      <div className="container">
        <h1>Register</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password:</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              id="password2"
              value={password2}
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
              required
            />
          </div>
          <button type="submit" onClick={handleRegister}>
            Register
          </button>
        </form>
      </div>{" "}
    </>
  );
};

export default Register;
