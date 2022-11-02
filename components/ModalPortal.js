import React, { useEffect } from "react";
import { motion } from "framer-motion";
import modalPortalStyles from "../styles/components/ModalPortal.module.scss";

const ModalPortal = ({ children, isOpen, closeModal, data, error }) => {
  const handleModalContainerClick = (e) => {
    e.stopPropagation();
    const modalContainer = document.getElementById("modalContainer");
    modalContainer.addEventListener("click", (e) => {
      if (e.target === modalContainer) {
        closeModal();
      }
    });
  };

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

  useEffect(() => {
    if (data.success || error) {
      closeModal();
    }
  }, [data]);

  return (
    <motion.div
      className={`${modalPortalStyles.formContainer} ${
        isOpen && modalPortalStyles.isActive
      }`}
      onClick={handleModalContainerClick}
      initial="hidden"
      variants={dropIn}
      animate={isOpen ? "visible" : "hidden"}
      exit="exit"
      id="modalContainer"
    >
      <button className={modalPortalStyles.closeBtn} onClick={closeModal}>
        &times;
      </button>
      {children}
    </motion.div>
  );
};

export default ModalPortal;
