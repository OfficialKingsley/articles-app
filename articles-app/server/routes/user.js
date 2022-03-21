/** @format */

import express from "express";
import {
  getUser,
  getUserArticles,
  add,
  login,
  addArt,
  deleteArt,
} from "./controllers/user.js";

const router = express.Router();

router.get("/", getUser);
router.get("/:id/articles", getUserArticles);
router.put("/:username/articles/add", addArt);

//Delting articles
router.delete("/:username/articles/:articleId", deleteArt);

//Login and Logout
router.post("/add", add);
router.put("/login", login);

export default router;
