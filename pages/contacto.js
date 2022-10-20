import React from "react";
import ContactForm from "../components/ContactForm";
import FormText from "../components/FormText";
import contactStyles from "../styles/pages/Contact.module.scss";

const contacto = () => {
  return (
    <>
      <div className={contactStyles.contact}>
        <FormText />
        <ContactForm />
      </div>
    </>
  );
};

export default contacto;
