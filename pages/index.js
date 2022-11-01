import HeroImg from "../components/HeroImg";
import ContactHeroImg from "../components/ContactHeroImg";
import Services from "../components/Services";
import heroImg from "../assets/chico-furgoneta.jpg";
import contactHeroImg from "../assets/heroImg.jpg";
import { motion } from "framer-motion";

export default function Home() {
  const boxVariants = {
    out: {
      y: 600,
    },
    in: {
      y: 0,
      transition: {
        duration: 0.9,
        // The first child will appear AFTER the parrent has appeared on the screen
        delayChildren: 0.3,
        // The next sibling will appear 0.5s after the previous one
        staggerChildren: 0.5,
        stiffness: 2,
        damping: 1,
      },
    },
  };

  const iconVariants = {
    out: {
      y: 500,
    },
    in: {
      y: 0,
    },
  };
  return (
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
  );
}
