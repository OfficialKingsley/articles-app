/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;

export const articleSchema = new Schema({
    title: {
        type: String,
        required: [1, "The title is required"],
    },
    body: String,
    author: String,
});

const Article = model("Article", articleSchema);

export const findArticles = (res) => {
    Article.find({}, (err, articles) => {
        if (err) {
            console.log(err);
        } else {
            res.json(articles);
        }
    });
};
export default Article;
