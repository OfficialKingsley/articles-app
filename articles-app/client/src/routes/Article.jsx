/** @format */

import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
const Article = () => {
    const [user, setUser] = useState({});
    const [article, setArticle] = useState({});
    const { username, id } = useParams();
    const { getUser } = useContext(UserContext);
    const navigate = useNavigate();
    const getArticle = async () => {
        const gottenUser = await getUser(username);
        if (!gottenUser.isLoggedIn || !gottenUser) {
            navigate("/login");
        } else {
            setUser(gottenUser);
            setArticle(gottenUser.articles.find((article) => article._id === id));
        }
        // console.log(gottenUser);
    };
    useEffect(() => {
        getArticle();
        console.log(user);
    }, []);

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
