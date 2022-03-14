/** @format */

const Register = () => {
    return (
        <>
            <div className="container">
                <h1>Register</h1>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" placeholder="Name" name="name" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" placeholder="Email" name="email" id="email" />
                    </div>
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
                    <div className="form-group">
                        <label htmlFor="password2">Confirm Password:</label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            id="password2"
                        />
                    </div>
                    <button type="submit" value={"Register"}>
                        Register
                    </button>
                </form>
            </div>{" "}
        </>
    );
};

export default Register;
