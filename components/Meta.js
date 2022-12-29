import Head from "next/head";
import React from "react";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/juank.svg" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Transportes Ligeros Juank",
  keywords:
    "Mudanzas en Zaragoza, Mudanzas, Transportes ligeros, Servicio de embalaje, Mercancia paletizada, Carga y descarga, Retirada de escombros",
  description: "Servicios de transportes ligeros.",
};

export default Meta;
