import * as Yup from "yup";

const yupFormValidation = () => {
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
      .typeError("Este campo solo acepta números.")
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

  return { initialValues, validationSchema };
};

export default yupFormValidation;
