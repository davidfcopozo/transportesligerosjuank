import * as Yup from "yup";

const yupContactFormValidation = () => {
  const initialValues = {
    nombre: "",
    numTel: "",
    correo: "",
    detalles: "",
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required("Campo requerido"),
    numTel: Yup.number()
      .typeError("Este campo solo acepta números.")
      .min(9, "Número de teléfono imcompleto")
      .integer()
      .required("Campo requerido"),
    correo: Yup.string()
      .email("Formato del correo electrónico es inválido")
      .required("Campo requerido"),
    detalles: Yup.string().required("Por favor, escriba su mensaje."),
  });

  return {
    validationSchema,
    initialValues,
  };
};

export default yupContactFormValidation;
