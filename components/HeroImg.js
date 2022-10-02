import React from "react";
import Button from "./Button";
import heroImgStyles from "../styles/components/HeroImg.module.scss";
import Image from "next/image";
import heroImg from "../assets/heroImg.jpg";

const HeroImg = () => {
  return (
    <div className={heroImgStyles.heroContainer}>
      <div className={heroImgStyles.heroImgContainer}>
        <img src="heroImg.jpg" alt="" />
        {/* <Image
          layout="fill"
          min-width="100vw"
          min-height="100vh"
          src={heroImg.src}
        /> */}
      </div>
      <div className={heroImgStyles.heroText}>
        <h1>Mudanzas en Zaragoza</h1>
        <Button value="Contáctanos" />
      </div>
    </div>
  );
};

export default HeroImg;
