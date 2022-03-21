/** @format */

import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { Arts } from "../components/styles/Articles";
import { Button } from "../components/styles/Button.styled";

const Articles = () => {
  const { username } = useParams();
  const { verifyUser, user } = useContext(UserContext);
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);

  const changeVerified = async () => {
    setVerified(await verifyUser(username, navigate));
  };
  useEffect(() => {
    changeVerified();
  }, []);
  const { articles } = user;
  return verified && articles.length ? (
    <Arts>
      <div className="container">
        <h2 className="title">Articles</h2>
        <ul className="list-group">
          {articles.map((article) => (
            <li key={article._id} className="list-item">
              <h3>{article.title}</h3>
              <br />

              <Link to={`/${username}/articles/${article._id}`}>
                <Button color="white" bgColor="darkblue">
                  View Article
                </Button>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={`/${username}/articles/add`}>
          <Button color="white" bgColor="blue">
            Add Article
          </Button>
        </Link>
      </div>
    </Arts>
  ) : (
    <Arts>
      <div className="container">
        <h2 className="title">No articles here 😢</h2>
        <p>
          You have no article in here, you can{" "}
          <Link to={`/${username}/articles/add`}>add an Article</Link> or view
          others' articles <Link to={`/${username}/all-articles`}>here</Link>
        </p>
        <br />
        <br />
        <Link to={`/${username}/articles/add`}>
          <Button color="white" bgColor="blue">
            Add Article
          </Button>
        </Link>
      </div>
    </Arts>
  );
};

export default Articles;
