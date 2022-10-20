import React from "react";
import contactFormStyles from "../styles/components/ContactForm.module.scss";

const FormText = () => {
  return (
    <div className={contactFormStyles.cardHeading}>
      <h2>Formulario de Contacto</h2>
      <p>
        Muchas fracias por visitarnos! <br /> ¿Cómo te podemos ayudar?
      </p>
    </div>
  );
};

export default FormText;
