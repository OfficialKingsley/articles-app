/** @format */

import {
  findUser,
  addUser,
  updateLoggedIn,
  getArticles,
  addArticle,
  deleteArticle,
} from "../../models/user.js";

export const getUser = (req, res) => {
  const { username } = req.query;
  findUser(username, res);
};
export const getUserArticles = (req, res) => {
  const { username } = req.params;
  getArticles(username, res);
};
export const add = (req, res) => {
  addUser(req.body);
};
export const login = (req, res) => {
  const { username, loginState } = req.body;
  updateLoggedIn(username, loginState, res);
};
export const addArt = (req, res) => {
  const { username } = req.params;
  const article = req.body;
  addArticle(username, article, res);
};
export const deleteArt = (req, res) => {
  const { username, articleId } = req.params;
  deleteArticle(username, articleId, res);
};
