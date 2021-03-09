import React from "react";
import "./Contents.scss";

const Contents = (props) => {
  return (
    <div>
      <div className="view">
            <img src={props.src}/>
      </div>
      <div className="titlevideo">
                  <p>{props.name}</p>
            </div>
    </div>
  );
};

export default Contents;
