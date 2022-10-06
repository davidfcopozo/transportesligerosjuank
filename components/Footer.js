import React from "react";
import footerStyles from "../styles/components/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelopesBulk,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <a href="tel:+34664067981">664 067 981</a>
        </div>

        <div>
          <FontAwesomeIcon icon={faEnvelopesBulk} />
          <a href="emailto:indidseo@gmail.com">example@mail.com</a>
        </div>

        {/* <div>
          <FontAwesomeIcon icon={faLocationCrosshairs} />
          <a href="emailto:indidseo@gmail.com">example@mail.com</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
