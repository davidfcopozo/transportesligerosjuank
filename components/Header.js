import React, { useEffect, useState } from "react";
import Link from "next/Link";
import Image from "next/image";
import Nav from "./Nav";
import headerStyles from "../styles/components/Header.module.scss";
import logo from "../assets/juank.svg";
import Button from "./Button";
import HumburgerIcon from "./icons/HumburgerIcon";
import useModal from "../hooks/useModal";
import btnStyles from "../styles/components/Button.module.scss";
import { motion } from "framer-motion";
import ModalPortal from "./ModalPortal";
import Presupuesto from "./Presupuesto";
import useFetch from "../hooks/useFetch";
import FormSuccess from "./FormSuccess";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, closeModal, openModal] = useModal();
  const [navIsOpen, closeNav, openNav] = useModal();
  const [data, error, submitData] = useFetch();

  const [success, setSuccess] = useState("");
  const [fail, setFail] = useState("");

  useEffect(() => {
    if (data.success) {
      setSuccess(data);
      console.log("This worked");
    } else {
      console.log("It didn't work");
      setFail(error);
    }
  }, [data]);

  return (
    <>
      <header className={headerStyles.header}>
        <div>
          <a href="tel:+34664067981">
            <FontAwesomeIcon icon={faPhone} /> 664 067 981
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

            <Button value={<HumburgerIcon />} clickHandler={openNav} />
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
