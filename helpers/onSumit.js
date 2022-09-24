export const onSubmit = (values) => {
  //console.log("Data from form submition", values);

  fetch("https://formsubmit.co/ajax/indidseo@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      servicio: values.servicio,
      nombre: values.nombre,
      numTel: values.numTel,
      correo: values.correo,
      desde: values.desde,
      hasta: values.hasta,
      fecha: values.fecha,
      detalles: values.detalles,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
