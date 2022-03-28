/** @format */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArticlesContext } from "../contexts/ArticlesContext";

const AllArticles = () => {
  const [allArticles, setAllArticles] = useState([]);
  const { getAllArticles } = useContext(ArticlesContext);
  const setArticles = async () => {
    setAllArticles(await getAllArticles());
  };

  useEffect(() => {
    setArticles();
  });
  return allArticles ? (
    <div>
      {allArticles.map((article) => (
        <div>
          <Link
            to={`/articles/${article._id}`}
            style={{ color: "white", textDecoration: "underline" }}
          >
            {article.title}, {article._id}
          </Link>
        </div>
      ))}
    </div>
  ) : (
    <>No article</>
  );
};

export default AllArticles;
