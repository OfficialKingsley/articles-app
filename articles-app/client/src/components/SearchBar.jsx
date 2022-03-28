/** @format */

import React, { useContext } from "react";
import { ArticlesContext } from "../contexts/ArticlesContext";
import { Form } from "./styles/Form";

const SearchBar = () => {
  const { articles, setArticles } = useContext(ArticlesContext);

  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
    console.log("He's good");
    articles
      ? articles.filter(
          (article) =>
            article.title.includes(searchText) ||
            article.title.includes(searchText)
        )
      : "No articles";
  };
  return (
    <form>
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Search By Id or Author"
      />
    </form>
  );
};

export default SearchBar;
