import { useState } from "react";
import { useSuccessContext } from "../context/FormSuccessContext";

const useFetch = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const { setSuccess, setFail } = useSuccessContext();

  const submitData = (values, onSubmitProps) => {
    fetch("https://formsubmit.co/ajax/indidseo@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Servicio: values.servicio,
        Nombre: values.nombre,
        Telefono: values.numTel,
        Correo: values.correo,
        Desde: values.desde,
        Hasta: values.hasta,
        Fecha: values.fecha,
        Detalles: values.detalles,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        setData(data);
        setSuccess(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setFail(error);
      });
  };

  return [data, error, submitData];
};

export default useFetch;
