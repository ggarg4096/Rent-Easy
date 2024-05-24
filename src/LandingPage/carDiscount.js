import React, { useState } from "react";
import "./carDiscount.css";
import benz from "./cars_photo/benz.jpg";
import porche from "./cars_photo/porche 911.jpg";
import bmw from "./cars_photo/bmw.webp";
import bmwlogo from "./cars_photo/bmw-logo.svg";
import mercedezlogo from "./cars_photo/benz-logo.svg";
import porchelogo from "./cars_photo/porsche-logo.svg";

const LandingPage = () => {
  const [currentImage, setCurrentImage] = useState(bmw);

  const changeImage = (newImage) => {
    if (newImage === mercedezlogo) {
      setCurrentImage(benz);
    } else if (newImage === porchelogo) {
      setCurrentImage(porche);
    } else if (newImage === bmwlogo) {
      setCurrentImage(bmw);
    } else {
      setCurrentImage(newImage);
    }
  };

  return (
    <div className="landing-page">
      <div className="landing-page-text">
        <h1>Welcome to Your Car Rental</h1>
        <p>Get 10% off on our luxury car rentals!</p>
        <div className="image-gallery">
          <img
            src={mercedezlogo}
            alt="Benz"
            onClick={() => changeImage(benz)}
          />
          <img
            src={porchelogo}
            className="porchelogo"
            alt="Porche"
            onClick={() => changeImage(porche)}
          />
          <img src={bmwlogo} alt="Image 3" onClick={() => changeImage(bmw)} />
        </div>
      </div>
      <div className="landing-page-image">
        <img src={currentImage} alt="Selected Image" />
      </div>
    </div>
  );
};

export default LandingPage;
