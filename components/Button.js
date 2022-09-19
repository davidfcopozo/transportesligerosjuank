import React from "react";
import btnStyles from "../styles/components/Button.module.scss";

const Button = ({ ...props }) => {
  return <button className={btnStyles.btn}>{props.value}</button>;
};

export default Button;
