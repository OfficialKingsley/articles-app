/** @format */

import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

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
  return verified ? (
    <div>
      {articles.map((article) => (
        <h3 key={article._id}>{article.title}</h3>
      ))}
    </div>
  ) : (
    <h4>No articles</h4>
  );
};

export default Articles;
