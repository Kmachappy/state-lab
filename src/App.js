// IMPORT useState
import { useState } from "react";
import React from "react";
import "./styles.css";
import imagesArr from "./imageData";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage]
  const [bigImage, setBigImage] = useState(imagesArr[0].img);
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  const handleClick = (imgUrl) => {
    // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
    setBigImage(imgUrl);
  };

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
  const images = imagesArr.map((ele, idx) => {
    return (
      <img
        src={ele.img}
        alt={ele.city}
        className="thumb"
        key={idx}
        onClick={() => handleClick(ele.img)}
      />
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        {/* <img src="" id="bigimage" alt='bigImage'/> */}
        <img src={bigImage} id="bigimage" alt="bigImage" />
      </div>
    </div>
  );
}
