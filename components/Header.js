import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import headerStyles from "../styles/components/Header.module.scss";
import logo from "../assets/juank.svg";
import Button from "./Button";
/* import HumburgerIcon from "./icons/HumburgerIcon"; */
import useModal from "../hooks/useModal";
import btnStyles from "../styles/components/Button.module.scss";
import { motion } from "framer-motion";
import ModalPortal from "./ModalPortal";
import Presupuesto from "./Presupuesto";
import useFetch from "../hooks/useFetch";
import FormSuccess from "./FormSuccess";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars } from "@fortawesome/free-solid-svg-icons";
import { useSuccessContext } from "./context/FormSuccessContext";

const Header = () => {
  let screenIntialValue = typeof window !== "undefined" && window.innerWidth;

  const [isOpen, closeModal, openModal] = useModal();
  const [navIsOpen, closeNav, openNav] = useModal();
  const [isDesktop, closeDesktop, openDesktop] = useModal();
  const [data, error, submitData] = useFetch();
  const [screenSize, setScreenSize] = useState(screenIntialValue);
  const { success, fail } = useSuccessContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setScreenSize(window.innerWidth);
      });
    }
  }, [screenSize]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 900) {
        openDesktop();
      } else {
        closeDesktop();
      }
    }
  });

  useEffect(() => {
    if (screenSize > 900) {
      openNav();
    } else {
      closeNav();
    }
  }, [screenSize]);

  return (
    <>
      <header className={headerStyles.header}>
        <div>
          <a href="tel:+34664067981">
            <FontAwesomeIcon icon={faPhone} /> Llámanos: 664 067 981
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

            <Button
              value={
                <FontAwesomeIcon
                  icon={faBars}
                  style={{ width: "2em", height: "fit-content" }}
                />
              }
              clickHandler={openNav}
            />
          </div>
        </div>
        <Nav navIsOpen={navIsOpen} closeNav={closeNav} />
      </header>

      <ModalPortal
        isOpen={isOpen}
        closeModal={closeModal}
        data={data}
        error={error}
      >
        <Presupuesto data={data} error={error} submitData={submitData} />
      </ModalPortal>

      <FormSuccess fail={fail} success={success} />
    </>
  );
};

export default Header;
