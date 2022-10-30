import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "../components/TextError";
import contactFormStyles from "../styles/components/ContactForm.module.scss";
import Image from "next/image";
import contactImage from "../assets/presupuesto.jpg";
import yupContactFormValidation from "../helpers/yupContactFormValidation";

const ContactForm = () => {
  const { contactFormInitialValues, contactFormValidationSchema } =
    yupContactFormValidation();

  const [data, setData] = useState("");
  const [error, setError] = useState("");

  async function submitForm(values, onSubmitProps) {
    await fetch("https://formsubmit.co/ajax/indidseo@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Nombre: values.name,
        Telefono: values.cel,
        Correo: values.email,
        Detalles: values.details,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        setData(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }

  return (
    <>
      <Formik
        initialValues={contactFormInitialValues}
        validationSchema={contactFormValidationSchema}
        validateOnMount
        key={458451151251220}
        onSubmit={submitForm}
      >
        {(formik) => {
          const clickHandler = () => {
            formik.setTouched({
              name: true,
              cel: true,
              email: true,
              details: true,
            });
          };
          return (
            <div className={contactFormStyles.formContainer}>
              <div className={contactFormStyles.card}>
                <div className={contactFormStyles.cardImage}>
                  <Image
                    src={contactImage.src}
                    layout="responsive"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <Form className={contactFormStyles.form}>
                <div className={contactFormStyles.formControl}>
                  <label
                    className={contactFormStyles.inputLabel}
                    htmlFor="name"
                  >
                    Nombre:
                  </label>
                  <Field
                    className={contactFormStyles.inputField}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Francisco García"
                    required
                  />
                  <ErrorMessage name="name" component={TextError} />
                </div>

                <div className={contactFormStyles.formControl}>
                  <label className={contactFormStyles.inputLabel} htmlFor="cel">
                    Número de telefónico:
                  </label>
                  <Field
                    className={contactFormStyles.inputField}
                    type="tel"
                    name="cel"
                    id="cel"
                    placeholder="976 876 876"
                    required
                  />
                  <ErrorMessage name="cel" component={TextError} />
                </div>

                <div className={contactFormStyles.formControl}>
                  <label
                    className={contactFormStyles.inputLabel}
                    htmlFor="email"
                  >
                    Correo Electrónico:
                  </label>
                  <Field
                    className={contactFormStyles.inputField}
                    type="correo"
                    name="email"
                    id="email"
                    placeholder="micorreo@ejemplo.es"
                    required
                  />
                  <ErrorMessage name="email" component={TextError} />
                </div>

                <div className={contactFormStyles.formControl}>
                  <label
                    className={contactFormStyles.inputLabel}
                    htmlFor="details"
                  >
                    Comentarios:
                  </label>
                  <Field
                    className={contactFormStyles.inputField}
                    as="textarea"
                    name="details"
                    id="details"
                    placeholder="Información"
                    required
                  />
                  <ErrorMessage name="details" component={TextError} />
                </div>

                <button
                  className={contactFormStyles.actionBtn}
                  type="submit"
                  onClick={clickHandler}
                  disabled={
                    !formik.isValid || formik.isSubmitting ? true : false
                  }
                  style={{
                    backgroundColor:
                      !formik.isValid || (formik.isSubmitting && "gray"),
                  }}
                >
                  Enviar
                </button>

                <div className={contactFormStyles.terms}>
                  <p>
                    Al someter este formulario está aceptando nuestros
                    <a href="#">Terminos y condiciones</a>
                  </p>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default ContactForm;
