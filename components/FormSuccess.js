import React, { useEffect, useState } from "react";
import formSuccessStyles from "../styles/components/FormSuccess.module.scss";
import { motion } from "framer-motion";
import xMark from "../assets/xMark.svg";
import checkMark from "../assets/checkMark.svg";
import Image from "next/image";

const FormSuccess = ({ success, fail }) => {
  const [open, setOpen] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setOpen(success.success);
    if (success || fail) {
      setFormSubmitted(true);
    }
  }, [open]);

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 2,
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      duration: 2,
      stiffness: 200,
    },
  };

  const handleModalContainerClick = (e) => {
    e.stopPropagation();
    const modalContainer = document.getElementById("successContainer");
    modalContainer.addEventListener("click", (e) => {
      if (e.target === modalContainer) {
        setFormSubmitted(false);
      }
    });
  };

  const bgColor = open ? "#43C467" : "#ff0000";

  return (
    <motion.div
      initial="hidden"
      variants={dropIn}
      animate={formSubmitted ? "visible" : "hidden"}
      exit="exit"
      className={`${formSuccessStyles.successContainer} ${
        formSubmitted && formSuccessStyles.isActive
      }`}
      id="successContainer"
      onClick={handleModalContainerClick}
    >
      <div className={formSuccessStyles.messageBox}>
        <div className={formSuccessStyles.imgContainer}>
          {open ? (
            <Image
              layout="responsive"
              width="100%"
              height="100%"
              objectFit="cover"
              objectPosition="center"
              src={checkMark.src}
              alt="Cotejo verde"
            />
          ) : (
            <Image
              layout="responsive"
              width="100%"
              height="100%"
              objectFit="cover"
              objectPosition="center"
              src={xMark.src}
              alt="Letra X de color rojo"
            />
          )}
        </div>

        <h2>{open ? "Enhorabuena!" : "Lo Sentimos"}</h2>
        <p>
          {open
            ? "Hemos recibido tu solicitud y la atenderemos lo mas pronto posible."
            : "El formulario no se ha enviado correctamente. Por favor intentelo de nuevo."}
        </p>
        <motion.button
          style={{ backgroundColor: `${bgColor}` }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setFormSubmitted(false)}
        >
          {open ? "Vale!" : "Reintentar"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FormSuccess;
