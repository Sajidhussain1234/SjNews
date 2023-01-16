import React from "react";

const NewsItem = (props) => {
  return (
    <div>
      <div className="card my-2" >
        <img src={props.imgUrl} alt="image missing" className="card-img-top" />
        <div className="card-body">
        <h6 className="card-title">{props.title}</h6>             
        <p className="card-text ms-1">{props.description}</p>
        <p className="card-text"><strong> Published by: </strong> {(props.author) ? props.author : "Unkown"} <br /> <strong> Dated: </strong>{new Date(props.date).toGMTString()} </p>
        </div><a href={props.newsUrl} target="_blank" className="btn btn-primary btn-sm">
        <strong> Read More</strong>
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
