import React from "react";
import presupuestoStyles from "../styles/components/Presupuesto.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import { onSubmit } from "../helpers/onSumit";

const Presupuesto = () => {
  ``;
  const initialValues = {
    servicio: "",
    nombre: "",
    numTel: "",
    correo: "",
    desde: "",
    hasta: "",
    fecha: "",
    detalles: "",
  };

  const validationSchema = Yup.object({
    servicio: Yup.string().required("Campo requerido"),
    nombre: Yup.string().required("Campo requerido"),

    numTel: Yup.number()
      .min(9, "Número de teléfono imcompleto")
      .integer()
      .required("Campo requerido"),
    correo: Yup.string()
      .email("Formato del correo electrónico es inválido")
      .required("Campo requerido"),

    desde: Yup.string().required(
      "Por favor indique desde donde se hará el servicio"
    ),
    hasta: Yup.string().required(
      "Por favor indique hasta donde se hará el servicio"
    ),

    fecha: Yup.date().required(`Por favor seleccione la fecha del servicio`),
    detalles: Yup.string(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {/* The onSubmit method catches the submitted form's values */}
      {/* <div className={presupuestoStyles.formContainer}>
        <button className={presupuestoStyles.closeBtn}>X</button> */}
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
          <label className={presupuestoStyles.inputLabel} htmlFor="servicio">
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
            <option value="Servicio de embalaje">Servicio de embalaje</option>
            <option value="Retirada de escombros">Retirada de escombros</option>
            <option value="Recogida en tienda">Recogida en tienda</option>
            <option value="Mercancía paletizada">Mercancía paletizada</option>
          </Field>
          <ErrorMessage name="servicio" component={TextError} />
        </div>

        <div className={presupuestoStyles.formControl}>
          <label className={presupuestoStyles.inputLabel} htmlFor="nombre">
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
          <label className={presupuestoStyles.inputLabel} htmlFor="numTel">
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
          <ErrorMessage name="numTel">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>

        <div className={presupuestoStyles.formControl}>
          <label className={presupuestoStyles.inputLabel} htmlFor="correo">
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
            <label className={presupuestoStyles.inputLabel} htmlFor="desde">
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
            <label className={presupuestoStyles.inputLabel} htmlFor="hasta">
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
            Fecha
          </label>

          <Field
            className={presupuestoStyles.inputField}
            type="date"
            name="fecha"
            id="fecha"
            required
          />
          <ErrorMessage name="fecha" component={TextError} />
        </div>

        <div className={presupuestoStyles.formControl}>
          <label className={presupuestoStyles.inputLabel} htmlFor="comments">
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

        <button className={presupuestoStyles.actionBtn} type="submit">
          Enviar
        </button>

        <div className={presupuestoStyles.terms}>
          <p>
            Al someter este formulario está aceptando nuestros
            <a href="#">Terminos y condiciones</a>
          </p>
        </div>
      </Form>
      {/* </div> */}
    </Formik>
  );
};

export default Presupuesto;
