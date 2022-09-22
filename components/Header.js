import React from "react";
import Link from "next/Link";
import Image from "next/image";
import Nav from "./Nav";
import headerStyles from "../styles/components/Header.module.scss";
import PhoneIcon from "./icons/PhoneIcon";
import logo from "../assets/juank.svg";
import Button from "./Button";
import HumburgerIcon from "./icons/HumburgerIcon";
import useModal from "../hooks/useModal";
import btnStyles from "../styles/components/Button.module.scss";
import { motion } from "framer-motion";
import ModalPortal from "./ModalPortal";
import Presupuesto from "./Presupuesto";

const Header = () => {
  const [isOpen, closeModal, openModal] = useModal();

  return (
    <>
      <header className={headerStyles.header}>
        <div>
          <a href="tel:+34664067981">
            <PhoneIcon /> 664 067 981
          </a>
        </div>

        <div>
          <Link href="/">
            <Image
              src={logo}
              width={120}
              height={120}
              alt="Transportes ligeros Juank"
            />
          </Link>

          <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={btnStyles.btn}
              onClick={openModal}
            >
              PRESUPUESTO
            </motion.button>

            <Button value={<HumburgerIcon />} />
          </div>
        </div>
        <Nav />
      </header>
      <ModalPortal isOpen={isOpen} closeModal={closeModal}>
        <Presupuesto />
      </ModalPortal>
    </>
  );
};

export default Header;
