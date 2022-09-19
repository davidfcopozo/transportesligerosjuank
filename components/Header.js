import React from "react";
import Nav from "./Nav";
import headerStyles from "../styles/components/Header.module.scss";
import PhoneIcon from "./icons/PhoneIcon";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div>
        <a href="tel:+34664067981">
          <PhoneIcon /> 664 067 981
        </a>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
