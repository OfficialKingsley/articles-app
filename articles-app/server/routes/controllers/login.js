/** @format */

import { loginUser } from "../../models/user.js";

const login = (req, res) => {
    const { username, password } = req.query;
    loginUser(username, password, res);
};
export default login;
