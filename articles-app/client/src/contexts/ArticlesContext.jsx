/** @format */

import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

export const ArticlesContext = createContext();
const ArticlesContextProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    const res = await axios.get(
      `http://localhost:8000/users/${user.username}/articles`
    );
    setArticles(await res.data);
  };
  const addArticle = (article) => {
    console.log(article);
    const newArticle = { ...article, author: user.name };
    axios.put(
      `http://localhost:8000/users/${user.username}/articles/add`,
      JSON.stringify(newArticle),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  const deleteArticle = (id) => {
    axios.delete(`http://localhost:8000/users/${user.username}/articles/${id}`);
  };
  return (
    <ArticlesContext.Provider
      value={{ getArticles, articles, addArticle, deleteArticle }}
    >
      <>{children}</>
    </ArticlesContext.Provider>
  );
};

export default ArticlesContextProvider;
