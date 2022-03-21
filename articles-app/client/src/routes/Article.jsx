/** @format */

import React, { useContext, useState, useEffect, useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { ArticlesContext } from "../contexts/ArticlesContext";
import { Art } from "../components/styles/Article";
import { Button } from "../components/styles/Button.styled";
const Article = () => {
  let article = {};
  const setArticle = (value) => {
    article = value;
  };
  const { username, id } = useParams();

  const { verifyUser, user } = useContext(UserContext);
  const { deleteArticle } = useContext(ArticlesContext);
  const navigate = useNavigate();

  const getArticle = async () => {
    setVerified(await verifyUser(username, navigate));
  };
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    getArticle();
  }, []);
  user.articles &&
    setArticle(user.articles.find((article) => article._id === id));

  const handleDelete = (e) => {
    e.preventDefault();
    deleteArticle(article._id);
    prompt("Are you sure you want to delete this?");
    navigate(`/${username}/`);
  };
  return article.title ? (
    <>
      <Art>
        <div className="container">
          <h2 className="title">{article.title}</h2>
          <p>{article.body}</p>
          <footer className="content-footer">
            <small>
              <blockquote>
                Author:{" "}
                <cite>
                  <em>{article.author}</em>
                </cite>
              </blockquote>
            </small>
            <div className="buttons">
              <Button onClick={handleDelete} color="white" bgColor="red">
                Delete
              </Button>
              <Link to={`/${username}/articles/edit`}>
                {" "}
                <Button color="white" bgColor="blue">
                  Edit
                </Button>{" "}
              </Link>
            </div>
          </footer>
        </div>
      </Art>
    </>
  ) : (
    <>No article</>
  );
};

export default Article;
