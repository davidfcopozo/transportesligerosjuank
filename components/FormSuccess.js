import React, { useEffect, useState } from "react";
import formSuccessStyles from "../styles/components/FormSuccess.module.scss";
import { motion } from "framer-motion";
import xMark from "../assets/xMark.svg";
import checkMark from "../assets/checkMark.svg";
import useFetch from "../hooks/useFetch";

const FormSuccess = ({ success, fail }) => {
  const [open, setOpen] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useFe;

  useEffect(() => {
    setOpen(success.success);
    if (open) {
      setSuccessMessage("El formulario ha sido enviado");
      console.log(open);
    }
  }, [success]);

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

  const bgColor = open ? "#43C467" : "#ff0000";

  return (
    <motion.div
      initial="hidden"
      variants={dropIn}
      animate={success || fail ? "visible" : "hidden"}
      exit="exit"
      className={`${formSuccessStyles.successContainer} ${
        (success || fail) && formSuccessStyles.isActive
      }`}
    >
      <div className={formSuccessStyles.messageBox}>
        <div className={formSuccessStyles.imgContainer}>
          {open ? (
            <img src={checkMark.src} alt="Cotejo verde" />
          ) : (
            <img src={xMark.src} alt="Letra X de color rojo" />
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
          //onClick={() => setSubmitted(false)}
        >
          {open ? "Vale!" : "Reintentar"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FormSuccess;
