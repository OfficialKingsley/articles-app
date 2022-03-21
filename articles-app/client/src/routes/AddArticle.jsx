/** @format */

import React, { useContext, useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { ArticlesContext } from "../contexts/ArticlesContext";
import { Form } from "../components/styles/Form";
import { Button } from "../components/styles/Button.styled";
const AddArticle = () => {
  const { username } = useParams();
  const { verifyUser, getUser, makeUser } = useContext(UserContext);
  const { addArticle } = useContext(ArticlesContext);
  const navigate = useNavigate();

  const getArticle = async () => {
    setVerified(await verifyUser(username, navigate));
  };
  const [verified, setVerified] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = { title, body };
    addArticle(article);
    navigate(`/${username}/`);
  };
  useEffect(() => {
    getArticle();
  }, []);

  return verified ? (
    <div className="container">
      <Form>
        <div className="container">
          <h1 className="form-title">Add Article 😎</h1>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body:</label>
            <textarea
              placeholder="Body"
              name="body"
              id="body"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
          </div>
          <Button
            type="submit"
            onClick={handleSubmit}
            color="white"
            bgColor="blue"
          >
            Add Article
          </Button>
        </div>
      </Form>
    </div>
  ) : (
    <>You are currently not logged in. Please you log in to add an article</>
  );
};

export default AddArticle;
