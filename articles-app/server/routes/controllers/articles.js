/** @format */
import { getArticles } from "../../models/article.js";
export const getAllArticles = (req, res) => {
  getArticles(res);
};
