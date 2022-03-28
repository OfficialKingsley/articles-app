/** @format */

import express from "express";
import { getAllArticles } from "./controllers/articles.js";

const router = express.Router();

router.get("/", getAllArticles);

export default router;
