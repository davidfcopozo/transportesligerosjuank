import React from "react";
import servicesStyles from "../styles/components/Services.module.scss";
import ServiceCard from "./ServiceCard";
import vanAbierta from "../assets/van-abierta.jpg";
import recogidaTienda from "../assets/recogida-tienda.jpg";
import servicioEmbalaje from "../assets/heroImg.jpg";
import mercanciaPaletizada from "../assets/mercancia-paletizada.jpg";
import retiradaEscombros from "../assets/retirada-escombros.jpg";

const Services = () => {
  return (
    <section id="servicios" className={servicesStyles.serviceSection}>
      <h1 className={servicesStyles.title}>Nuestros Servicios</h1>

      <div className={servicesStyles.cardWrapper}>
        <ServiceCard
          img={vanAbierta.src}
          title="Mudanzas"
          paragraph="Realizamos mudanzas generales, mudanzas para particulares y mudanzas para oficinas."
          alt="Van abierta"
        />

        <ServiceCard
          img={recogidaTienda.src}
          title="Recogida en Tienda"
          paragraph="Transportamos tus compras desde la tienda a tu casa, de manera rápida y segura."
          alt="Persona entregando paquete a otra"
        />

        <ServiceCard
          img={servicioEmbalaje.src}
          title="Servicio de Embalaje"
          paragraph="Ofrecemos todo tipo de embalaje para que asegurar el cuidado y protección de tus pertenencias."
          alt="Persona embalando caja"
        />

        <ServiceCard
          img={retiradaEscombros.src}
          title="Retirada de Escombros"
          paragraph="Retiramos los escombros de tus obras de manera rápida y eficaz."
          alt="Escombros"
          priority
        />

        <ServiceCard
          img={mercanciaPaletizada.src}
          title="Mercancía Paletizada"
          paragraph="Retiramos los escombros de tus obras de manera rápida y eficaz."
          alt="Mercancias paletizadas"
        />
      </div>
    </section>
  );
};

export default Services;
