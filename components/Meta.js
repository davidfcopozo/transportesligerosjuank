import Script from "next/script";
import Head from "next/head";
import React from "react";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5BE5PRX017"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-5BE5PRX017'); `}
      </Script>
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
