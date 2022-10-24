import { useState } from "react";

const useFormSubmit = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const formSubmitData = (values, onSubmitProps) => {
    fetch("https://formsubmit.co/ajax/indidseo@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Nombre: values?.nombre,
        Telefono: values.numTel,
        Correo: values.correo,
        Detalles: values.detalles,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        setData(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return [data, error, formSubmitData];
};

export default useFormSubmit;
