/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Home = () => {
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
    const { name, articles } = user;
    return name ? (
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
