import React from "react";
import "./Video.scss";
import { Link } from "react-router-dom";

const Video = (props) => {
  return (
    <div className="container-video">
      <div className="video">
        <Link to={props.path}>
          <img src={props.src} alt="img" />
        </Link>
      </div>
      <div className="title">
        <p>{props.name}</p>
      </div>
      <div className="author">
        <p className="author">{props.author}</p>
      </div>
    </div>
  );
};

export default Video;
