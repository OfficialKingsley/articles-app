/** @format */

import { findUser } from "../../models/user.js";
import { findArticles } from "../../models/article.js";

export const getUser = (req, res) => {
    console.log(req.params.id);
    findUser();
    res.send("Hello world");
};
export const getArticles = (req, res) => {
    console.log("Request made");
    findArticles(res);
};
