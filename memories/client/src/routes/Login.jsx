/** @format */

const Login = () => {
    return (
        <>
            <div className="container">
                <h1>Login</h1>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Username" name="username" id="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            id="password"
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>{" "}
        </>
    );
};

export default Login;
