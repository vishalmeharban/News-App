import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const NewsBoard = ({ category }) => {
  let apikey = "84ec5ffe58f94791803c118487f6d092";
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div class="mt-3">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <div className="container">
        {articles.map((news, index) => {
          return (
            <NewsItems
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsBoard;
