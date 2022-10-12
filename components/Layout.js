import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import WhatsAppIcon from "./WhatsAppIcon";

const Layout = ({ children }) => {
  const mainStyles = {
    display: "flex",
    alignContent: "center",
  };

  return (
    <>
      <Header />
      <div>
        <main style={mainStyles}>{children}</main>
      </div>
      <Footer />
      <WhatsAppIcon />
    </>
  );
};

export default Layout;
