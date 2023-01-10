import Head from "next/head";
import React from "react";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      {/* <!-- Google tag (gtag.js) --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5BE5PRX017"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-5BE5PRX017');
      </script>
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
  description: "Servicios de transporte ligero.",
};

export default Meta;
