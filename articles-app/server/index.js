/** @format */

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
//
import userRoute from "./routes/user.js";
import articlesRoute from "./routes/articles.js";

//Init express
const app = express();

//Middle ware for useful packages
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Setting up routes
app.use("/users", userRoute);
app.use("/articles", articlesRoute);
mongoose.connect("mongodb://localhost:27017/articlesdb");
const connection = mongoose.connection;
connection.once("open", () => {
  app.listen(8000, () => {
    console.log("Server Started Successfully on port 8000");
  });
  console.log("Successfully connected to database");
});
connection.on("error", (err) => {
  console.log(err);
});
