import HeroImg from "../components/HeroImg";
import ContactHeroImg from "../components/ContactHeroImg";
import Services from "../components/Services";
import heroImg from "../assets/chico-furgoneta.jpg";
import contactHeroImg from "../assets/heroImg.jpg";
import { motion } from "framer-motion";
import loadAnimation from "../helpers/loadAnimation";
import Meta from "../components/Meta";

export default function Home() {
  const { boxVariants, iconVariants } = loadAnimation();

  return (
    <>
      <Meta />
      <motion.div variants={boxVariants} initial="out" animate="in">
        <motion.div variants={iconVariants}>
          <HeroImg
            img={heroImg.src}
            imgAlt="Caja siendo embalada"
            title="Mudanzas en Zaragoza"
            btnValue="Contáctanos"
          />
        </motion.div>
        <motion.div variants={iconVariants}>
          <Services />
        </motion.div>
        <motion.div variants={iconVariants}>
          <ContactHeroImg
            img={contactHeroImg.src}
            imgAlt="Chico dando servicio de mudanza"
            title="¿Necesitas ayuda con tu mudanza?"
            btnValue="Contáctanos"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
