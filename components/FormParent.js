import React from "react";
import useFormSubmit from "../hooks/useFormSubmit";
import ContactForm from "./ContactForm";
import FormText from "./FormText";

const FormParent = () => {
  const [formSubmitData] = useFormSubmit();
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
      <ContactForm formSubmitData={formSubmitData} />
    </div>
  );
};

export default FormParent;
