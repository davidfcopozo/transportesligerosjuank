export const onSubmit = (values, onSubmitProps) => {
  console.log("Data from form submition", values);
  console.log("Data from onSubmitProps", onSubmitProps);

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
    })
    .catch((error) => console.log(error));
};
