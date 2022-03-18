/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Home = () => {
  const { username } = useParams();
  const { user, verifyUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);

  const changeVerified = async () =>
    setVerified(await verifyUser(username, navigate));

  useEffect(() => {
    changeVerified();
  }, []);
  const { name, articles } = user;
  return verified ? (
    <div>
      Hello {name}{" "}
      {articles.map((article) => (
        <Link key={article._id} to={`/${username}/articles/${article._id}`}>
          <h1>{article.title}</h1>
        </Link>
      ))}
    </div>
  ) : (
    <h1>Hello user</h1>
  );
};

export default Home;
