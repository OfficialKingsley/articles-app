/** @format */

import { useState, useContext } from "react";
// useEffect;
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";

const Login = () => {
    //Hooks
    const { loginUser } = useContext(LoginContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    //My functions
    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(username, password, navigate);
    };
    // useEffect(() => {
    //     isLoggedIn && navigate("/");
    // });
    return (
        <>
            <div className="container">
                <h1>Login</h1>
                <form action="">
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
                    <button type="submit" onClick={handleSubmit}>
                        Login
                    </button>
                </form>
            </div>{" "}
        </>
    );
};

export default Login;
