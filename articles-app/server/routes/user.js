/** @format */

import express from "express";
import { getUser, getArticles } from "./controllers/user.js";

const router = express.Router();

router.get("/", getUser);
router.get("/:id/articles", getArticles);

export default router;
