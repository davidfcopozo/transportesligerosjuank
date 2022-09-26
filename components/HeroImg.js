import React from "react";
import Button from "./Button";
import heroImgStyles from "../styles/components/HeroImg.module.scss";

const HeroImg = () => {
  return (
    <div className={heroImgStyles.heroContainer}>
      <div className={heroImgStyles.heroImgContainer}>
        <img src="heroImg.jpg" alt="" />
      </div>
      <div className={heroImgStyles.heroText}>
        <h1>Mudanzas en Zaragoza</h1>
        <Button value="Contáctanos" />
      </div>
    </div>
  );
};

export default HeroImg;
