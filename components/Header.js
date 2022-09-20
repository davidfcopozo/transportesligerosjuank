import React from "react";
import Link from "next/Link";
import Image from "next/image";
import Nav from "./Nav";
import headerStyles from "../styles/components/Header.module.scss";
import PhoneIcon from "./icons/PhoneIcon";
import logo from "../assets/juank.svg";
import Button from "./Button";
import HumburgerIcon from "./icons/HumburgerIcon";

const Header = () => {
  return (
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
          <Button value="PRESUPUESTO" />
          <Button value={<HumburgerIcon />} />
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
