import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faHouseChimney,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import navStyles from "../styles/components/Nav.module.scss";
import { motion } from "framer-motion";

const Nav = ({ navIsOpen, closeNav }) => {
  const slideIn = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: "0",
      transition: {
        delay: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
      exit: {
        /*  y: "100vh", */
        opacity: 0,
        delay: 4,
        stiffness: 200,
      },
    },
  };

  const handleNavContainerClick = (e) => {
    const navContainer = document.getElementById("navDiv");
    const navLi = document.querySelector(".navLi").classList;

    navContainer.addEventListener("click", (e) => {
      if (e.target === navContainer || e.target.className === navLi) {
        e.stopPropagation();
        closeNav();
      }
    });
  };

  return (
    <motion.nav
      variants={slideIn}
      initial="hidden"
      animate={navIsOpen ? "visible" : "hidden"}
      className={`${navStyles.navContainer} ${
        navIsOpen && navStyles.navActive
      }`}
      id="navDiv"
      onClick={handleNavContainerClick}
    >
      <ul className={`${navStyles.nav}`}>
        <li className="navLi">
          <FontAwesomeIcon icon={faHouseChimney} /> Inicio
        </li>
        <li className="navLi">
          <FontAwesomeIcon icon={faTruckFast} /> Servicios
        </li>
        <li className="navLi">
          <FontAwesomeIcon icon={faHeadset} /> Contacto
        </li>
      </ul>
    </motion.nav>
  );
};

export default Nav;
