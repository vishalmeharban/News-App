import React from "react";
import image from "../news.jpg"

const NewsItems = ({ title, description, src, url }) => {
  return (
    <div>
      <div id="newscard" class="card bg-dark text-light p-2 text-center" style={{ maxWidth: "345px" }}>
        <img src={src?src:image} style={{height:"190px", width:"100%" , objectFit:"cover"}} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title"> {title.slice(0,50)} </h5>
          <p class="card-text"> {description? description.slice(0,100): "The G7 summit concluded with world leaders pledging increased support for Ukraine, addressing global"} </p>
          <a href={url} class="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
