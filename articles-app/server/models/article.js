/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;

export const articleSchema = new Schema({
  title: {
    type: String,
    required: [1, "The title is required"],
  },
  body: { type: String, required: true },
  author: { type: String, required: true },
});

const Article = model("Article", articleSchema);

export const getArticles = (res) => {
  Article.find({}, (err, articles) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(articles);
    }
  });
};
export default Article;
