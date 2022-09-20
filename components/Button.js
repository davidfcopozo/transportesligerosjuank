import React from "react";
import { motion } from "framer-motion";
import btnStyles from "../styles/components/Button.module.scss";

const Button = ({ ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={btnStyles.btn}
    >
      {props.value}
    </motion.button>
  );
};

export default Button;
