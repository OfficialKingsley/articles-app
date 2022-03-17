/** @format */

import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Articles = () => {
    const [user, setUser] = useState({});
    const { username } = useParams();
    const { getUser } = useContext(UserContext);
    const navigate = useNavigate();

    const grabUser = async () => {
        const gottenUser = await getUser(username);
        if (!gottenUser.isLoggedIn || !gottenUser) {
            navigate("/login");
        } else {
            setUser(gottenUser);
        }
        // console.log(gottenUser);
    };
    useEffect(() => {
        grabUser();
        console.log(user);
    }, []);
    const { articles } = user;
    return articles ? (
        <div>
            {articles.map((article) => (
                <h3 key={article._id}>{article.title}</h3>
            ))}
        </div>
    ) : (
        <h4>No tasks</h4>
    );
};

export default Articles;
