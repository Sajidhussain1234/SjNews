import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const upDateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d49d0738a1454dd295d35559cb89931a&pageSize=18`;
    // setLoading(true);
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setArticles(response.articles);
    setLoading(false);
    document.title = `SjNews - ${props.category}`;
  };

  useEffect(() => {
    upDateNews();
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=d49d0738a1454dd295d35559cb89931a&page=${page + 1}&pageSize=18`;
    setPage(page + 1);
    let response = await fetch(url);
    response = await response.json();
    setArticles(articles.concat(response.articles));
    setTotalResults(response.totalResults);
  };

  return (
    <div className="container">
      <h2
        className="text-center fixed"
        style={{ paddingTop: "88px", paddingBottom: "8px" }}
      >
      
        <strong>SjNews</strong> - Top {props.category} Headlines
      </h2>
      <div>{loading && <Spiner />}</div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spiner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
