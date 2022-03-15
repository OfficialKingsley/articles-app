/** @format */

import mongoose from "mongoose";
import { articleSchema } from "./article.js";

const Schema = mongoose.Schema;
const model = mongoose.model;

export const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    articles: [articleSchema],
});

const User = model("User", userSchema);

export const findUser = () => {
    console.log("Users found");
};
export default User;
