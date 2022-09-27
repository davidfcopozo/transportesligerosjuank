import React, { useEffect, useState } from "react";
import formSuccessStyles from "../styles/components/FormSuccess.module.scss";
import { motion } from "framer-motion";
import CheckMark from "./icons/CheckMark";
import XMark from "./icons/XMark";

const FormSuccess = ({ success, message }) => {
  const [open, setOpen] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setOpen(success.success);
    if (open) {
      setSuccessMessage("El formulario ha sido enviado");
      console.log(open);
    }
  }, [success]);

  return (
    <motion.div className={formSuccessStyles.successContainer}>
      <div className={formSuccessStyles.messageBox}>
        {open ? <CheckMark /> : <XMark />}
        {/* <XMark />
        <div>{open ? <CheckMark  /> : <XMark />}</div> */}
        <h2>{open ? "Enhorabuena!" : "Lo Sentimos"}</h2>
        <p>
          {open
            ? "El formulario ha sido enviado"
            : "El formulario no se ha enviado correctamente"}
        </p>
      </div>
    </motion.div>
  );
};

export default FormSuccess;
