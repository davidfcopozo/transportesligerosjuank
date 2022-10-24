import React from "react";
import presupuestoStyles from "../styles/components/Presupuesto.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import yupFormValidation from "../helpers/yupFormValidation";

const Presupuesto = ({ data, error, submitData }) => {
  const { initialValues, validationSchema } = yupFormValidation();
  const currentDate = new Date().toJSON().slice(0, 10);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitData}
        validateOnMount
      >
        {(formik) => {
          console.log(formik);
          const clickHandler = () => {
            formik.setTouched({
              servicio: true,
              nombre: true,
              numTel: true,
              correo: true,
              desde: true,
              hasta: true,
              fecha: true,
            });
          };
          return (
            <Form className={presupuestoStyles.form}>
              <div className={presupuestoStyles.card}>
                <div className={presupuestoStyles.cardImage}>
                  <h2 className={presupuestoStyles.cardHeading}>
                    Empecemos
                    <small>Obten tu presupuesto gratis</small>
                  </h2>
                </div>
              </div>

              <div className={presupuestoStyles.formControl}>
                <label
                  className={presupuestoStyles.inputLabel}
                  htmlFor="servicio"
                >
                  Servicio:
                </label>
                <Field
                  className={presupuestoStyles.inputField}
                  as="select"
                  name="servicio"
                  required
                >
                  <option value="" disabled hidden>
                    Selecciona un servicio
                  </option>
                  <option value="Mudanzas">Mudanzas</option>
                  <option value="Servicio de embalaje">
                    Servicio de embalaje
                  </option>
                  <option value="Retirada de escombros">
                    Retirada de escombros
                  </option>
                  <option value="Recogida en tienda">Recogida en tienda</option>
                  <option value="Mercancía paletizada">
                    Mercancía paletizada
                  </option>
                </Field>
                <ErrorMessage name="servicio" component={TextError} />
              </div>

              <div className={presupuestoStyles.formControl}>
                <label
                  className={presupuestoStyles.inputLabel}
                  htmlFor="nombre"
                >
                  Nombre:
                </label>
                <Field
                  className={presupuestoStyles.inputField}
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Francisco García"
                  required
                />
                <ErrorMessage name="nombre" component={TextError} />
              </div>

              <div className={presupuestoStyles.formControl}>
                <label
                  className={presupuestoStyles.inputLabel}
                  htmlFor="numTel"
                >
                  Número de telefónico:
                </label>
                <Field
                  className={presupuestoStyles.inputField}
                  type="tel"
                  name="numTel"
                  id="numTel"
                  placeholder="976 876 876"
                  required
                />
                <ErrorMessage name="numTel" component={TextError} />
              </div>

              <div className={presupuestoStyles.formControl}>
                <label
                  className={presupuestoStyles.inputLabel}
                  htmlFor="correo"
                >
                  Correo Electrónico:
                </label>
                <Field
                  className={presupuestoStyles.inputField}
                  type="correo"
                  name="correo"
                  id="correo"
                  placeholder="micorreo@ejemplo.es"
                  required
                />
                <ErrorMessage name="correo" component={TextError} />
              </div>

              <div>
                <h3>Lugar del servicio:</h3>
                <div className={presupuestoStyles.formControl}>
                  <label
                    className={presupuestoStyles.inputLabel}
                    htmlFor="desde"
                  >
                    Desde:
                  </label>
                  <Field
                    className={presupuestoStyles.inputField}
                    type="text"
                    name="desde"
                    id="desde"
                    placeholder="Código postal, localidad, ciudad"
                    required
                  />
                  <ErrorMessage name="desde" component={TextError} />
                </div>

                <div className={presupuestoStyles.formControl}>
                  <label
                    className={presupuestoStyles.inputLabel}
                    htmlFor="hasta"
                  >
                    Hasta:
                  </label>
                  <Field
                    className={presupuestoStyles.inputField}
                    type="text"
                    name="hasta"
                    id="hasta"
                    placeholder="Código postal, localidad, ciudad"
                    required
                  />
                  <ErrorMessage name="hasta" component={TextError} />
                </div>
              </div>

              <div className={presupuestoStyles.formControl}>
                <label className={presupuestoStyles.inputLabel} htmlFor="fecha">
                  Fecha:
                </label>

                <Field
                  className={presupuestoStyles.inputField}
                  type="date"
                  name="fecha"
                  id="fecha"
                  required
                  min={currentDate}
                />
                <ErrorMessage name="fecha" component={TextError} />
              </div>

              <div className={presupuestoStyles.formControl}>
                <label
                  className={presupuestoStyles.inputLabel}
                  htmlFor="comments"
                >
                  Detalles:
                </label>
                <Field
                  className={presupuestoStyles.inputField}
                  as="textarea"
                  name="detalles"
                  id="detalles"
                  placeholder="El piso tiene 3 habitaciones, un salón, cocina con un frigo, lava platos, etc..."
                />
              </div>

              <button
                className={presupuestoStyles.actionBtn}
                type="submit"
                onClick={clickHandler}
                disabled={!formik.isValid || formik.isSubmitting ? true : false}
                style={{
                  backgroundColor:
                    !formik.isValid || (formik.isSubmitting && "gray"),
                }}
              >
                Enviar
              </button>

              <div className={presupuestoStyles.terms}>
                <p>
                  Al someter este formulario está aceptando nuestros
                  <a href="#">Terminos y condiciones</a>
                </p>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Presupuesto;
