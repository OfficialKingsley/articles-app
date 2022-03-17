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
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    articles: [articleSchema],
    isLoggedIn: Boolean,
});

const User = model("User", userSchema);

export const findUser = (username, res) => {
    User.find({ username }, (err, userArray) => {
        if (err) {
            console.log(err);
        } else {
            console.log(userArray);
            res.json(userArray[0]);
        }
    });
};
export const updateLoggedIn = (username, value) => {
    User.updateOne({ username }, { isLoggedIn: value }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Login status altered");
        }
    });
};
export const loginUser = (username, password, res) => {
    User.find({ username }, (err, userArray) => {
        if (err) {
            console.log(err);
        } else {
            const user = userArray[0];
            console.log("Req made");
            if (password === user.password) {
                updateLoggedIn(username, true);
                res.status(200).json(user);
            } else {
                res.json({ errorMessage: "Username password mismatch" });
                res.status(404);
                updateLoggedIn(username, false);
            }
        }
    });
};
export default User;
