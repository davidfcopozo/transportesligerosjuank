import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const mainStyles = {
    display: "flex",
    paddingTop: "25%",
    justifyContent: "center",
    alignContent: "center",
    margin: "0 auto",
  };

  return (
    <>
      <Header />
      <div>
        <main style={mainStyles}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
