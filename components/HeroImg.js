import React from "react";
import Button from "./Button";
import heroImgStyles from "../styles/components/HeroImg.module.scss";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Router, { useRouter } from "next/router";

const HeroImg = ({ img, imgAlt, title, btnValue }) => {
  const { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <motion.div className={heroImgStyles.heroContainer} style={{ y }}>
      <div className={heroImgStyles.heroImgContainer}>
        <Image
          src={img}
          layout="responsive"
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition="center"
          alt={imgAlt}
        />
      </div>
      <div className={heroImgStyles.heroText} style={{ y }}>
        <h1>{title}</h1>
        <Link href="/contacto">
          <Button
            value={btnValue}
            clickHandler={() => {
              Router.push("/contacto");
            }}
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default HeroImg;
