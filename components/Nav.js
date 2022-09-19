import React from "react";
import Link from "next/Link";
import Image from "next/image";
import logo from "../assets/logo.svg";
import navStyles from "../styles/components/Nav.module.scss";
import Button from "./Button";
import HumburgerIcon from "./icons/HumburgerIcon";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <Link href="/">
        <Image
          src={logo}
          width={120}
          height={90}
          alt="Transportes ligeros Juank"
        />
      </Link>
      <Button value="Presupuesto" />
      <Button value={<HumburgerIcon />} />
    </nav>
  );
};

export default Nav;
