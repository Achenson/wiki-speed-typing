import React from "react";
//import { useState, useEffect, useRef } from "react";

function SingleLetter(props) {
  let textDecoration = "none";
  let fontWeight = "normal";

  if (props.color === "red") {
    textDecoration = "underline";
  }

  if (props.color === "blue" && props.letterToRender === " ") {
    textDecoration = "underline";
    // backgroundColor = "AliceBlue";
  }

  return (
    <span
      style={{
        color: `${props.color}`,
        textDecoration: `${textDecoration}`,
        fontWeight: `${fontWeight}`,
        // backgroundColor: `${backgroundColor}`
        // backgroundColor: `${backgroundColor}`
      }}
    >
      {props.letterToRender}
    </span>
  );
}

export default SingleLetter;
