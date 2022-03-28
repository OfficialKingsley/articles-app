/** @format */

import mongoose from "mongoose";
import Article, { articleSchema } from "./article.js";

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

const findAUser = async (username) => {
  await User.find({ username }, (err, userArray) => {
    if (err) {
    } else {
      return userArray[0];
    }
  });
};
export const findUser = (username, res) => {
  User.find({ username }, (err, userArray) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).json(userArray[0]);
    }
  });
};
export const updateLoggedIn = (username, value, res) => {
  User.updateOne({ username }, { isLoggedIn: value }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Login status of ${username} changed to ${value}`);
      res.status(200).json({
        message: `Login status of user with the ${username} changed to ${value}`,
      });
    }
  });
};

export const addUser = (user) => {
  const newUser = new User({ ...user, articles: [] });
  newUser.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Successfully added ${user.name} to the database`);
    }
  });
};
export const getArticles = (username, res) => {
  User.find({ username }, (err, userArray) => {
    if (err) {
      console.log(err);
    } else {
      const user = userArray[0];
      const { articles } = user;
      res.status(200).json(articles);
      console.log(articles);
    }
  });
};

export const addArticle = (username, article, res) => {
  const newArticle = new Article({ ...article });

  newArticle.save();
  User.find({ username }, (err, userArray) => {
    if (err) {
      console.log(err);
    } else {
      const user = userArray[0];
      const { articles } = user;
      User.updateOne(
        { username },
        { articles: [...articles, newArticle] },
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Successfully added the new article");
            res
              .status(200)
              .json({ message: "Successfully added the new article" });
          }
        }
      );
    }
  });
};
export const deleteArticle = (username, articleId, res) => {
  User.find({ username }, (err, userArray) => {
    if (err) {
      console.log(err);
    } else {
      const user = userArray[0];
      const { articles } = user;
      console.log(
        articles.find((article) => String(article._id) === articleId)
      );
      User.updateOne(
        { username },
        {
          articles: articles.filter(
            (article) => String(article._id) !== articleId
          ),
        },
        (err) => {
          if (err) {
            console.log(err);
          } else {
            Article.deleteOne({ _id: articleId }, (err) => {
              if (err) {
                console.log(err);
              } else {
                console.log("Successfully deleted the article");
                res
                  .status(200)
                  .json({ message: "Successfully deleted the article" });
              }
            });
          }
        }
      );
    }
  });
};
export default User;
