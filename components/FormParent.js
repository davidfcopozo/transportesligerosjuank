import React from "react";
import ContactForm from "./ContactForm";
import FormText from "./FormText";
import Presupuesto from "./Presupuesto";

const FormParent = () => {
  const styles = {
    marginInline: "auto",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15vh",
  };
  return (
    <div style={styles}>
      <FormText />
      <ContactForm />
    </div>
  );
};

export default FormParent;
