import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "../components/TextError";
import yupFormValidation from "../helpers/yupFormValidation";
import useFetch from "../hooks/useFetch";
import contactFormStyles from "../styles/components/ContactForm.module.scss";
import Image from "next/image";
import contactImage from "../assets/presupuesto.jpg";

const ContactForm = () => {
  const { initialValues, validationSchema } = yupFormValidation();
  const currentDate = new Date().toJSON().slice(0, 10);
  const [data, error, submitData] = useFetch();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitData}
        validateOnMount
      >
        {(formik) => {
          const clickHandler = () => {
            console.log(formik);
            formik.setTouched({
              nombre: true,
              numTel: true,
              correo: true,
            });
          };
          return (
            <>
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
                      htmlFor="nombre"
                    >
                      Nombre:
                    </label>
                    <Field
                      className={contactFormStyles.inputField}
                      type="text"
                      name="nombre"
                      id="nombre"
                      placeholder="Francisco García"
                      required
                    />
                    <ErrorMessage name="nombre" component={TextError} />
                  </div>

                  <div className={contactFormStyles.formControl}>
                    <label
                      className={contactFormStyles.inputLabel}
                      htmlFor="numTel"
                    >
                      Número de telefónico:
                    </label>
                    <Field
                      className={contactFormStyles.inputField}
                      type="tel"
                      name="numTel"
                      id="numTel"
                      placeholder="976 876 876"
                      required
                    />
                    <ErrorMessage name="numTel">
                      {(errorMsg) => <div className="error">{errorMsg}</div>}
                    </ErrorMessage>
                  </div>

                  <div className={contactFormStyles.formControl}>
                    <label
                      className={contactFormStyles.inputLabel}
                      htmlFor="correo"
                    >
                      Correo Electrónico:
                    </label>
                    <Field
                      className={contactFormStyles.inputField}
                      type="correo"
                      name="correo"
                      id="correo"
                      placeholder="micorreo@ejemplo.es"
                      required
                    />
                    <ErrorMessage name="correo" component={TextError} />
                  </div>

                  <div className={contactFormStyles.formControl}>
                    <label
                      className={contactFormStyles.inputLabel}
                      htmlFor="informacion"
                    >
                      Comentarios:
                    </label>
                    <Field
                      className={contactFormStyles.inputField}
                      /* type="correo" */
                      as="textarea"
                      name="correo"
                      id="correo"
                      placeholder="Información"
                      required
                    />
                    <ErrorMessage name="correo" component={TextError} />
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
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default ContactForm;
