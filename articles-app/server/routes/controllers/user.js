/** @format */

import { findUser } from "../../models/user.js";
import { findArticles } from "../../models/article.js";

export const getUser = (req, res) => {
    const { username } = req.query;
    console.log(username);
    findUser(username, res);
};
export const getArticles = (req, res) => {
    console.log("Request made");
    findArticles(res);
};
