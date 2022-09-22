import React from "react";
import Button from "./Button";
import hero from "../assets/heroImg.jpg";
import Image from "next/image";
import heroImgStyles from "../styles/components/HeroImg.module.scss";

const HeroImg = () => {
  return (
    <div className={heroImgStyles.heroContainer}>
      <Image src={hero} />
      <div className={heroImgStyles.heroText}>
        <h1>Mudanzas en Zaragoza</h1>
        <Button value="Contáctanos" />
      </div>
    </div>
  );
};

export default HeroImg;
