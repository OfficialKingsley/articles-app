/** @format */

import React, { useContext, useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
const Article = () => {
  const [article, setArticle] = useState({});
  const { username, id } = useParams();
  const { verifyUser, user } = useContext(UserContext);
  const navigate = useNavigate();
  const getArticle = async () => {
    const verified = await verifyUser(username, navigate);
    console.log(verified, user);
    if (verified) {
      setArticle(user.articles.find((article) => article._id === id));
      console.log(user.articles);
    }
  };
  useLayoutEffect(() => {
    getArticle();
  }, []);
  //   useEffect(() => {
  //     getArticle();
  //   }, []);

  return article.title ? (
    <>
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <footer>
          <small style={{ fontSize: "0.7rem" }}>By {article.author}</small>
        </footer>
      </div>
    </>
  ) : (
    <>No article</>
  );
};

export default Article;
