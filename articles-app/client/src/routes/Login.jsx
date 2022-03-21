/** @format */

import { useState, useContext } from "react";
// useEffect;
import { useNavigate } from "react-router-dom";
import { Button } from "../components/styles/Button.styled";
import { Form } from "../components/styles/Form";
import { LoginContext } from "../contexts/LoginContext";

const Login = () => {
  //Hooks
  const { login } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //My functions
  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password, navigate);
  };

  return (
    <>
      <Form>
        <div className="container">
          <h1 className="form-title">Login</h1>
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
            />
          </div>
          <Button
            color="white"
            bgColor="blue"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Login;
