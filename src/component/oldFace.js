import React from "react";

import "./oldFace.css";


const oldFace = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
            /* insert an id to be able to manipulate the image in the DOM */
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />
       
      <div
          className="bounding-box"
          styling that makes the box visible base on the return value
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};
export default oldFace;
