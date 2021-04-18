import React from "react";
import "./View.scss";

const View = (props) => {
  return (
    <div>
      <div className="view">
        <video width="750" height="500" controls>
          <source src={props.src} type="video/mp4" />
        </video>
      </div>
      <div className="view-recommend">
      
      </div>
    </div>
  );
};

export default View;
