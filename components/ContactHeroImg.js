import React from "react";
import Button from "./Button";
import contactHeroImgStyles from "../styles/components/ContactHeroImg.module.scss";
import Image from "next/image";
import heroImg from "../assets/heroImg.jpg";

const ContactHeroImg = ({ img, imgAlt, title, btnValue }) => {
  return (
    <div className={contactHeroImgStyles.heroContainer}>
      <div className={contactHeroImgStyles.heroImgContainer}>
        <Image
          layout="responsive"
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition="center"
          src={img}
          alt={imgAlt}
        />
      </div>
      <div className={contactHeroImgStyles.heroText}>
        <h1>{title}</h1>
        <Button value={btnValue} />
      </div>
    </div>
  );
};

export default ContactHeroImg;
