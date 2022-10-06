import React from "react";
import Image from "next/image";
import serviceCardStyles from "../styles/components/ServiceCard.module.scss";

const ServiceCard = ({ img, title, paragraph }) => {
  return (
    <div className={serviceCardStyles.card}>
      <div className={serviceCardStyles.imgWrapper}>
        <Image
          className={serviceCardStyles.imgWrapper}
          src={img}
          layout="fixed"
          width="100%"
          height="100%"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <div className={serviceCardStyles.textsWrapper}>
        <h2>{title}</h2>
        <span></span>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
