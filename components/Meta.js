import React from "react";
import Head from "next/Head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <link rel="icon" href="/juank.svg" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Transportes Ligeros Juank",
  keywords:
    "Mudanzas en Zaragoza, Mudanzas, Transportes ligeros, Servicio de embalaje, Mercancia paletizada, Carga y descarga, Retirada de escombros",
  description: "Servicios de transportes ligeros.,",
};

export default Meta;
