import { useState } from "react";
import React from "react";
import "./styles.css";
import imagesArr from "./imageData";

export default function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  const handleClick = (imgUrl) => {
    setBigImage(imgUrl);
  };

  const images = imagesArr.map((ele, idx) => {
    return (
      console.log(bigImage),
      (
        <img
          src={ele.img}
          alt={ele.city}
          // className="thumb"
          // this way changes the class of the element and applies styling from css based on condition
          className={ele.img !== bigImage ? "thumb" : "thumb border"}
          key={idx}
          onClick={() => handleClick(ele.img)}
          // this way add styling inline to the element based on conditino. why does it leave and empty style once unclicked tho
          // style={ele.img !== bigImage ? {} : { border: "2px solid green" }}
        />
      )
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        <img src={bigImage} id="bigimage" alt="bigImage" />
      </div>
    </div>
  );
}
